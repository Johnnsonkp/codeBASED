import './App.css'
import './components/Tabs/tabs.css'

import { LeftPanel, RightPanel } from './components/Panels/Panels.jsx';
import {checkSolutionStatus, checkStatus, compareOutputs} from './components/CodeCompiler/status.js'
import { fetchAllRepos, getSelectedCodeChallenge, getSelectedRepo } from './components/api/challengeService';
import { postDataToAPI, postSolutionDataToAPI } from './Service/CompileAPI.js';
import { useCallback, useEffect, useState } from 'react'

import Auth from './components/auth/Auth.jsx';
import CodeMirror from '@uiw/react-codemirror';
import Divider from './components/Divider';
import Footer from './components/Footer';
import GitHubOAuth from './components/auth/GitHuboAuth.jsx';
import LanguageNav from './components/Languages/LanguageNav.jsx';
import Nav from './components/Nav';
import OutputWindows from './components/CodeCompiler/OutputWindows.jsx';
import ShowHideSolution from './components/CustomButtons/ShowHideSolution.jsx';
import SidePanel from './components/SidePanel';
import SidePanelComb from './components/SidePanelComb.jsx';
import TabSlide from './components/Tabs/TabSlide.jsx';
import TextAreaComp from './components/TextInputs/TextAreaComp.jsx';
import TextEditors from './components/TextEditors';
import { ThemeProvider } from './components/theme-provider';
import TopBanner from './components/TopBanner';
import Topicbutton from './components/Topics';
import axios from "axios";
import { cppLanguage } from '@codemirror/lang-cpp';
import { dummyCode } from './components/PlaceHolder';
import { dummyTopicTitles } from './helpers/DummyData.js';
import { extractCodeInstructions } from './helpers/CodeExtract.js';
import { fetchUserInfo } from './components/api/userService';
import { languageOptions } from './helpers/Language';
import { statuses } from './helpers/statusCodes';

function App() {
  const [count, setCount] = useState('')
  const [userInput, setUserInput] = useState()
  const [selected, setSelected] = useState()
  const [compare, setCompare] = useState()
  const [userInformation, setUserInformation] = useState()
  const [sideNavTitles, setSideNavTitles] = useState()
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(languageOptions.filter((lang) => lang.value == 'c'))
  const [outputDetails, setOutputDetails] = useState(null);
  const [solutionOutputDetails, setSolutionOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [solutionProcessing, setSolutionProcessing] = useState(null);
  const [blur, setBlur] = useState(true);
  const [score, setScore] = useState(0);
  const [currentChallengeTitle, setCurrentChallengeTitle] = useState(null);
  const [processingChecker, setProcessingChecker] = useState(false);
  const [processingChecker2, setProcessingChecker2] = useState(false);
  const [authorized, setAuthorized] = useState(false)
  const [lang, setLang] = useState(cppLanguage);
  const tabs = ["Code Challenge", "Code Explaination"]
  const tabs1 = ["Solution", "Solution Explaination"]
  const [tabsContainer, setTabsContainer] = useState(tabs[0])
  const [tabsContainer1, setTabsContainer1] = useState(tabs[0])
  const [directories, setDirectories] = useState()
  const [returnData, setReturnData] = useState(
    {
      expected_output: null,
      stdout: null
    }
  );

  const compareOutputs = ({outputDetails, solutionOutputDetails, setScore}) => {
    atob(outputDetails?.compile_output) == atob(solutionOutputDetails?.compile_output)? true : false
    
    if (atob(outputDetails?.compile_output) == atob(solutionOutputDetails?.compile_output)){
      setScore((score) => score + 1);
      alert("Yayy!");
    }
  }
  
//////////////////////////////////////////////////////////////////////////////////////////////////
  const handleCompile = (userInput) => {
    setProcessing(true);
    setProcessingChecker2(true);
    const formData = {
      language_id: language[0].id,
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
    postDataToAPI({
      axios,
      checkStatus,
      options, 
      setOutputDetails, 
      setReturnData, 
      setProcessing, 
      setProcessingChecker, 
      setProcessingChecker2
    })
  };

  const handleSolutionCompile = (userInput) => {
    setSolutionProcessing(true);
    setProcessingChecker(true)
    const formData = {
      language_id: language[0].id,
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
    postSolutionDataToAPI({
        axios,
        checkSolutionStatus,
        options, 
        setSolutionOutputDetails,
        setReturnData,
        setProcessing,
        setSolutionProcessing,
        setProcessingChecker, 
        setProcessingChecker2
    });
  };

//////////////////////////////////////////////////////////////////////////////////////////////////

  const onChangeInput = useCallback((val, viewUpdate) => {
    setUserInput(val);
  }, []);

  const onChangeSolution = useCallback((val, viewUpdate) => {
    setCount(val);
  }, []);

  const nextChallenge = () => {
    sideNavTitles && sideNavTitles.map((title, index) => {
      if (title == currentChallengeTitle){
        
        let nextChallenge = sideNavTitles[index + 1] || sideNavTitles[0]
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
    {!authorized? <GitHubOAuth setAuthorized={setAuthorized}/> :
      <>
      <Divider />
      <Topicbutton 
        topicTitles={directories || dummyTopicTitles} 
        selected={selected}
        setSelected={setSelected}
      />
      <div 
        className="card" 
        style={{
          display: 'flex', 
          justifyContent: 'space-around', 
          marginBottom: '120px', 
          padding: '0px'
        }}
      >
        <SidePanelComb 
          sideNavTitles={sideNavTitles} 
          loadSelectedChallenge={loadSelectedChallenge} 
          selected={selected} 
          directories={directories} 
          currentChallengeTitle={currentChallengeTitle} 
          setSelected={setSelected}
        />
          <LanguageNav 
            languageOptions={languageOptions} 
            setLanguage={setLanguage} 
            language={language}
          />
          <LeftPanel 
            language={language}
            setTabsContainer={setTabsContainer}
            tabsContainer={tabsContainer}
            userInput={userInput}
            onChangeInput={onChangeInput}
            processingChecker1={processingChecker2}
          />
        
          <RightPanel 
            language={language}
            setTabsContainer1={setTabsContainer1}
            tabsContainer1={tabsContainer1}
            count={count}
            onChangeSolution={onChangeSolution}
            processingChecker2={processingChecker2}
          />
        {/* </div> */}
        <OutputWindows 
          handleCompile={handleCompile} 
          userInput={userInput} 
          outputDetails={outputDetails} 
          processing={processing} 
          solutionOutputDetails={solutionOutputDetails} 
          handleSolutionCompile={handleSolutionCompile} 
          count={count} 
          solutionProcessing={solutionProcessing}
        />

      </div>
        <Footer 
          nextChallenge={nextChallenge}
          userInput={userInput} 
          setCompare={setCompare} 
          compareOutputs={compareOutputs} 
          score={score} 
          sideNavTitles={sideNavTitles}
          solutionOutputDetails={solutionOutputDetails}
          outputDetails={outputDetails} 
          setScore={setScore}
        /> 
        </>}
      </ThemeProvider>
  )
}

export default App
