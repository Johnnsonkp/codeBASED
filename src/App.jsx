import './App.css'
import './components/Tabs/tabs.css'

import { LeftPanel, RightPanel } from './components/Panels/Panels.jsx';
import {checkSolutionStatus, checkStatus} from './components/CodeCompiler/status.js'
import { fetchDefaultRepos, getAllRepos, getSelectedCodeChallenge, getSelectedRepo, getSelectedRepoOnDropDown } from './components/api/challengeService';
import { postDataToAPI, postSolutionDataToAPI } from './Service/CompileAPI.js';
import { useCallback, useEffect, useState } from 'react'

import Divider from './components/Divider';
import Footer from './components/Footer';
import GitHubOAuth from './components/auth/GitHuboAuth.jsx';
import LanguageNav from './components/Languages/LanguageNav.jsx';
import Nav from './components/Nav';
import OutputWindows from './components/CodeCompiler/OutputWindows.jsx';
import SidePanelComb from './components/SidePanelComb.jsx';
import SidePanelContainer from './components/SidePanelComp/SidePanelContainer.jsx';
import { ThemeProvider } from './components/theme-provider';
import TopBanner from './components/TopBanner';
import Topicbutton from './components/Topics';
import axios from "axios";
import { dummyCode } from './components/PlaceHolder';
import { dummyTopicTitles } from './helpers/DummyData.js';
import { extractCodeInstructions } from './helpers/CodeExtract.js';
import { fetchUserInfo } from './components/api/userService';
import { languageOptions } from './helpers/Language';
import { useTheme } from './components/theme-provider';

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
  const [score, setScore] = useState(0);
  const [currentChallengeTitle, setCurrentChallengeTitle] = useState(null);
  const [processingChecker, setProcessingChecker] = useState(false);
  const [processingChecker2, setProcessingChecker2] = useState(false);
  const [authorized, setAuthorized] = useState(false)
  const tabs = ["Code Challenge", "Code Explaination"]
  const tabs1 = ["Solution", "Solution Explaination"]
  const [tabsContainer, setTabsContainer] = useState(tabs[0])
  const [tabsContainer1, setTabsContainer1] = useState(tabs[0])
  const [directories, setDirectories] = useState()
  const [userRepos, setUserRepos] = useState()
  const [dirUpdate, setDirUpdate] = useState()
  const theme = useTheme();
  const [returnData, setReturnData] = useState(
    {expected_output: null,
      stdout: null}
  );
  const [returnSolutionData, setReturnSolutionData] = useState(
    {expected_output: null,
      stdout: null}
  );

  const compareOutputs = ({outputDetails, solutionOutputDetails}) => {

    const userOutput = btoa(outputDetails?.compile_output);
    const solutionOutput = btoa(solutionOutputDetails?.compile_output);
    
    if (atob(userOutput) == atob(solutionOutput)){
      setScore((score) => score + 1);
      alert("Your solution is correct!");
    }
  }
  
//////////////////////////////////////////////////////////////////////////////////////////////////
  const handleCompile = (userInput) => {
    setProcessing(true);
    setProcessingChecker(true);
    const formData = {
      language_id: language[0].id,
      source_code: btoa(userInput),
      // source_code: btoa(userInput),
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
    setProcessingChecker2(true)
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
        setReturnSolutionData,
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

  function loadSelectedChallenge(codingChallengeName, selected, dirUpdate){
    getSelectedCodeChallenge(codingChallengeName, selected, dirUpdate)
    .then(data => {
      let startingCodeBlock = extractCodeInstructions(data);
      setUserInput(startingCodeBlock);
      setCount(data);
      setCurrentChallengeTitle(codingChallengeName);
    })
  }

  const handleUserContents = (data) => {
    fetchDefaultRepos(data)
    .then(response => {
      if (response?.status && response.status !== 200) {
        console.error("Data error:", response);
        setDirectories(dummyTopicTitles);
        return;
      }

      const directories = response?.directories?.length > 0 ? response.directories : null;
      const files = response?.files?.length > 0 ? response.files : null;
      
      setDirectories(directories);
      setSideNavTitles(files);
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
  }

  const loadUserContents = () => {
    getAllRepos(userInformation)
    .then((data) => {
      if (data && data.status && data.status != 200){
        console.log("data err", data);
        setUserRepos(null);
        return;
      } 
      setUserRepos(data);
      handleUserContents(data);
    })
  }

  useEffect(() => {
    if (userInformation && userInformation.id && authorized && !userRepos){
      console.log("userInformation:", userInformation)
      loadUserContents()
    } 
    else{
      setUserRepos(null);
      setDirectories(dummyTopicTitles);
    }
  }, [userInformation, authorized]);

  useEffect(() => {
    if(dirUpdate){

      getSelectedRepoOnDropDown(dirUpdate, userInformation.login)
      .then(data => {
        if (data.directories && data.directories.length > 0)
        {
          setDirectories(data.directories);
        } else {
          setDirectories(null);
          setSelected(null)
        }
        if (data.files && data.files.length > 0){
          setSideNavTitles(data.files);
        }else {
          setSideNavTitles(null);
        }
      })
    }
  }, [dirUpdate])

  useEffect(() => {
    if(selected || directories){
      console.log("dirUpdate", dirUpdate)
      getSelectedRepo(selected, dirUpdate)
        .then(data => 
          setSideNavTitles(data)
        )
    }
  }, [selected])
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TopBanner compare={compare} dummyCode={dummyCode} count={count}/> 
      <Nav 
        userInfo={userInformation} 
        setUserRepos={setUserRepos}
        setDirectories={setDirectories}
        dummyTopicTitles={dummyTopicTitles}
        compare={compare} 
        dummyCode={dummyCode} 
        count={count}
      />
    {!authorized? 
      <GitHubOAuth 
        setAuthorized={setAuthorized}
        setUserInformation={setUserInformation}
      /> :
      <>
      <Divider />
      <Topicbutton 
        dirUpdate={dirUpdate}
        setDirUpdate={setDirUpdate}
        topicTitles={directories} 
        selected={selected}
        setSelected={setSelected}
        userRepos={userRepos}
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
        <SidePanelContainer className={'sideMenu'}>
          <SidePanelComb 
            sideNavTitles={sideNavTitles} 
            loadSelectedChallenge={loadSelectedChallenge} 
            selected={selected} 
            directories={directories} 
            currentChallengeTitle={currentChallengeTitle} 
            setSelected={setSelected}
            dirUpdate={dirUpdate}
          />
        </SidePanelContainer>
          <LanguageNav 
            className={'langNav'}
            languageOptions={languageOptions} 
            setLanguage={setLanguage} 
            language={language}
            showSelectedLangOnly={false}
          />
          <LeftPanel 
            theme={theme}
            language={language}
            setTabsContainer={setTabsContainer}
            tabsContainer={tabsContainer}
            userInput={userInput}
            onChangeInput={onChangeInput}
            processingChecker1={processingChecker}
            showSelectedLangOnly={true}
          />
        
          <RightPanel
            theme={theme} 
            language={language}
            setTabsContainer1={setTabsContainer1}
            tabsContainer1={tabsContainer1}
            count={count}
            onChangeSolution={onChangeSolution}
            processingChecker2={processingChecker2}
            showSelectedLangOnly={false}
          />
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
        /> 
        </>}
      </ThemeProvider>
  )
}

export default App
