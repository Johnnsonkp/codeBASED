import './App.css'

import {checkSolutionStatus, checkStatus} from './components/CodeCompiler/status.js'
import { fetchAllRepos, getSelectedCodeChallenge, getSelectedRepo } from './components/api/challengeService';
import { useCallback, useEffect, useState } from 'react'

import Auth from './components/auth/Auth.jsx';
import CompileBtn from './components/CustomButtons/CompileBtn';
import Divider from './components/Divider';
import Footer from './components/Footer';
import GitHubOAuth from './components/auth/GitHuboAuth.jsx';
import Nav from './components/Nav';
import OpenAI from "openai";
import OutputDetails from './components/outputWindow/OutputDetails';
import OutputWindow from './components/outputWindow/OutputWindow';
import SidePanel from './components/SidePanel';
import TextEditors from './components/TextEditors';
import { ThemeProvider } from './components/theme-provider';
import TopBanner from './components/TopBanner';
import Topicbutton from './components/Topics';
import axios from "axios";
import { dummyCode } from './components/PlaceHolder';
import { fetchUserInfo } from './components/api/userService';
import { languageOptions } from './helpers/Language';
import { statuses } from './helpers/statusCodes';

function App() {
  const [count, setCount] = useState('')
  const [userInput, setUserInput] = useState()
  const [selected, setSelected] = useState()
  const [dirName, setDirName] = useState([])
  const [compare, setCompare] = useState()
  const [userInformation, setUserInformation] = useState()
  const [sideNavTitles, setSideNavTitles] = useState()
  const [loading, setLoading] = useState(false);
  const [aiAnswer, setAIAnswer] = useState()
  const [language, setLanguage] = useState(languageOptions[2])
  const [outputDetails, setOutputDetails] = useState(null);
  const [solutionOutputDetails, setSolutionOutputDetails] = useState(null);
  const [returnData, setReturnData] = useState(
    {
      expected_output: null,
      stdout: null
    }
  );
  const [customInput, setCustomInput] = useState("");
  const [processing, setProcessing] = useState(null);
  const [solutionProcessing, setSolutionProcessing] = useState(null);
  const [blur, setBlur] = useState(true);
  const [score, setScore] = useState(0);
  const [currentChallengeTitle, setCurrentChallengeTitle] = useState(null);
  const [processingChecker, setProcessingChecker] = useState(false);
  const [processingChecker2, setProcessingChecker2] = useState(false);
  const [authorized, setAuthorized] = useState(false)


  const compareOutputs = () => {
    if (atob(outputDetails?.compile_output) == atob(solutionOutputDetails?.compile_output)){
      setScore((score) => score + 1);
      alert("Yayy!");
    }
  }
  
//////////////////////////////////////////////////////////////////////////////////////////////////
  const handleCompile = (userInput) => {
    console.log("handle compile:", userInput)
    setProcessing(true);
    setProcessingChecker2(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      // source_code: btoa(code),
      source_code: btoa(userInput),
      stdin: btoa(''),
    };
    const options = {
      method: "POST",
      url: import.meta.env.VITE_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        
        checkStatus(token, axios)
        .then(data => {
          setOutputDetails(data)
          setReturnData({
            expected_output: data.expected_output,
            stdout: data.stdout,
          });
          setProcessing(false)
          setProcessingChecker(false);
          setProcessingChecker2(false);
        })
        
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };


  const handleSolutionCompile = (userInput) => {
    console.log("handle compile:", count)
    setSolutionProcessing(true);
    setProcessingChecker(true)
    const formData = {
      language_id: language.id,
      // encode source code in base64
      // source_code: btoa(code),
      source_code: btoa(count),
      stdin: btoa(''),
    };
    const options = {
      method: "POST",
      url: import.meta.env.VITE_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
      },
      data: formData,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        // checkStatus(token);
        checkSolutionStatus(token, axios)
        .then(data => {
          setSolutionOutputDetails(data)
          setReturnData({
            expected_output: data.expected_output,
            stdout: data.stdout,
          });
          setSolutionProcessing(false)
          setProcessingChecker(false);
          setProcessingChecker2(false);
        })
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

//////////////////////////////////////////////////////////////////////////////////////////////////

  const topicTitles = ["C Basics", "Recursions", "Variables", "functions", "Nested Loops", "Pointers"]
  const [directories, setDirectories] = useState()

  const onChange = useCallback((val, viewUpdate) => {
    setUserInput(val);
  }, []);

  const onChangeSolution = useCallback((val, viewUpdate) => {
    setCount(val);
  }, []);

  const extractCodeInstructions = (str) => {
    const endIndex = str.indexOf('*/');
    if (endIndex !== -1) {
      const extracted = str.slice(0, endIndex + 2); // Include `*/` in the result
      return extracted;
    } else {
      console.log("End marker `*/` not found.");
    }
  }

  const nextChallenge = () => {
    sideNavTitles && sideNavTitles.map((title, index) => {
      if (title == currentChallengeTitle){
        
        let nextChallenge = sideNavTitles[index + 1] || sideNavTitles[0]
        // return getSelectedCodeChallenge(nextChallenge, selected);
        return loadSelectedChallenge(nextChallenge, selected)
      }
    })
  }

  function loadSelectedChallenge(codingChallengeName, selected){
    getSelectedCodeChallenge(codingChallengeName, selected)
    .then(data => {
      let startingCodeBlock = extractCodeInstructions(data);
      setUserInput(startingCodeBlock);
      setCount(data);
      setCurrentChallengeTitle(codingChallengeName);

    })
  }

  useEffect(() => {
    fetchUserInfo()
    .then(data => setUserInformation(data));

    fetchAllRepos()
      .then(data => setDirectories(data))

  }, []);

  useEffect(() => {
    if(selected){
      getSelectedRepo(selected)
        .then(data => setSideNavTitles(data))
    }
  }, [selected])
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TopBanner compare={compare} dummyCode={dummyCode} count={count}/>
      <Nav userInfo={userInformation}/>

    {/* {!authorized? <Auth setAuthorized={setAuthorized}/> : */}
    {!authorized? <GitHubOAuth setAuthorized={setAuthorized}/> :
      <>
      <Divider />
      <Topicbutton 
        topicTitles={directories || topicTitles} 
        selected={selected}
        setSelected={setSelected}
      />

      <div 
        className="card" 
        style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '120px', 
          padding: '0px !important',
        }}
      >
        {sideNavTitles?
          <SidePanel 
            onClick={(e) => loadSelectedChallenge(e.target.innerText, selected) } 
            selected={selected} 
            sideNavTitles={sideNavTitles}
            topicTitles={directories}
            currentChallengeTitle={currentChallengeTitle}
          /> :
          <SidePanel 
            onClick={(e) => setSelected(e.target.innerText, selected) } 
            selected={selected} 
            sideNavTitles={directories}
            topicTitles={directories}
            currentChallengeTitle={currentChallengeTitle}
          />
        }  

        <TextEditors 
          processingChecker2={processingChecker2}
          processingChecker={processingChecker} 
          userInput={userInput} 
          count={count}
          dummyCode={dummyCode}
          onChange={onChange} 
          onChangeSolution={onChangeSolution}
          blur={blur}
          setBlur={setBlur}
        />
        
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
          
          <div style={{display: "flex", flexShrink: 0, flexDirection: 'column', width: '60%'}}>
            <OutputWindow outputDetails={outputDetails} title={"User Output"}/>
            <CompileBtn 
              onClick={() => handleCompile(userInput)} 
              handleCompile={handleCompile} 
              userInput={userInput} 
              processing={processing}
            />
          </div>
          <div 
            style={{border: '1px solid lightGray', background: 'lightGray', marginTop: '25px', marginBottom: '10px'}}
          >
          </div>
          <div style={{display: "flex", flexShrink: 0, flexDirection: 'column', width: '60%'}}>
            <OutputWindow outputDetails={solutionOutputDetails} title={"Solution Output"}/>
            <CompileBtn 
              onClick={() => handleSolutionCompile(count)} 
              handleCompile={handleCompile} 
              userInput={count} 
              processing={solutionProcessing}
            />
          </div>

          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
          {solutionOutputDetails && <OutputDetails outputDetails={solutionOutputDetails} />}
        </div>

        </div>
        <Footer 
          nextChallenge={nextChallenge}
          userInput={userInput} 
          setCompare={setCompare} 
          compareOutputs={compareOutputs} 
          score={score} 
          sideNavTitles={sideNavTitles}
        /> 
        </>}
      </ThemeProvider>
  )
}

export default App
