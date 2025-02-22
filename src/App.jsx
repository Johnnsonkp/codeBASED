import './App.css'
import './components/Tabs/tabs.css'

import {checkSolutionStatus, checkStatus} from './components/CodeCompiler/status.js'
import { fetchDefaultRepos, getAllRepos, getSelectedCodeChallenge, getSelectedRepo, getSelectedRepoOnDropDown } from './api/challengeService.js';
import { postDataToAPI, postSolutionDataToAPI } from './Service/CompileAPI.js';
import { useCallback, useEffect, useState } from 'react'

import { ChallengeContext } from './store/context/ChallengeContext.jsx';
import Divider from './components/Common/Divider.jsx';
import Footer from './components/Common/Footer.jsx';
import LanguageNav from './components/Languages/LanguageNav.jsx';
import OutputWindows from './components/CodeCompiler/OutputWindows.jsx';
import { PanelsCombined } from './components/Panels/PanelsCombined.jsx';
import SidePanelComb from './components/SidePanel/SidePanelComb.jsx';
import SidePanelContainer from './components/SidePanelComp/SidePanelContainer.jsx';
import TopicsCarousel from './components/TopicsCarousel/Topics.jsx'
import { UserContext } from './store/context/UserContext.jsx';
import axios from "axios";
import { dummyTopicTitles } from './helpers/DummyData.js';
import { extractCodeInstructions } from './helpers/CodeExtract.js';
import { isEmptyObj } from './helpers/utils.js';
import { languageOptions } from './helpers/Language';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { useTheme } from './components/theme-provider';

function App() {
  const {userState} = useContext(UserContext)
  const {challengeState, challengeDispatch} = useContext(ChallengeContext)
  const isUserAuth = userState.authorised
  const userInfo = userState.user
  const [userInformation, setUserInformation] = useState(userInfo)
  const navigate = useNavigate()
  
  const [count, setCount] = useState('')
  const [userInput, setUserInput] = useState()
  const [selected, setSelected] = useState()
  const [sideNavTitles, setSideNavTitles] = useState()
  const [language, setLanguage] = useState(languageOptions.filter((lang) => lang.value == 'c'))
  const [outputDetails, setOutputDetails] = useState(null);
  const [solutionOutputDetails, setSolutionOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [solutionProcessing, setSolutionProcessing] = useState(null);
  const [score, setScore] = useState(0);
  const [currentChallengeTitle, setCurrentChallengeTitle] = useState(null);
  const [processingChecker, setProcessingChecker] = useState(false);
  const [processingChecker2, setProcessingChecker2] = useState(false);
  const tabs = ["Code Challenge", "Code Explaination"]
  const [tabsContainer, setTabsContainer] = useState(tabs[0])
  const [tabsContainer1, setTabsContainer1] = useState(tabs[0])
  const [directories, setDirectories] = useState()
  const [userRepos, setUserRepos] = useState()
  const [dirUpdate, setDirUpdate] = useState()
  const [repoOnDropDownSelect, setRepoOnDropDownSelect] = useState()
  const theme = useTheme();
  const [ setReturnData] = useState(
    {expected_output: null,
      stdout: null}
  );
  const [ setReturnSolutionData] = useState(
    {expected_output: null,
      stdout: null}
  );

  const resetOutputs = () => {
    setSolutionOutputDetails(null)
    setOutputDetails(null)
    setProcessing(false)
    setSolutionProcessing(false)
  }
  
  const compareOutputs = () => {
    const userOutput = btoa(outputDetails?.compile_output);
    const solutionOutput = btoa(solutionOutputDetails?.compile_output);
    
    if (atob(userOutput) == atob(solutionOutput)){
      setScore(challengeState.score);
      challengeDispatch({type: "CORRECT_SOLUTION"})
    }
    else{
      challengeDispatch({type: "INCORRECT_SOLUTION"})
    }
    resetOutputs()
  }

//////////////////////////////////////////////////////////////////////////////////////////////////
  const handleCompile = (userInput) => {
    setProcessing(true);
    setProcessingChecker(true);
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

  const handleSolutionCompile = (count) => {
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
    let userRepos = data;
    let repo = userRepos?.filter((repo) => repo === "holbertonschool-low_level_programming");
    let defaultRepo = repo[0]? repo[0] : userRepos[0];
    
    setRepoOnDropDownSelect(defaultRepo);
    fetchDefaultRepos(defaultRepo)
      .then(response => {
        if (response?.status && response.status !== 200) {
          setDirectories(dummyTopicTitles);
          return;
        }
        const directories = response?.directories?.length > 0 ? response.directories : null;
        const files = response?.files?.length > 0 ? response.files : null;
        setDirectories(directories);
        setSideNavTitles(files);
      })
  }

  const loadUserContents = useCallback(() => {
    getAllRepos(userInformation)
    .then((data) => {
      setUserRepos(data);
      handleUserContents(data);
    })
  }, [userInformation]);

  useEffect(() => {
    if (userInformation && userInformation.id && isUserAuth && !userRepos){
      loadUserContents()
    } 
    else{
      setUserRepos(null);
      setDirectories(dummyTopicTitles);
    }
  }, [userInformation, isUserAuth]);

  useEffect(() => {
    if (dirUpdate) {
      getSelectedRepoOnDropDown(dirUpdate, userInformation.login).then(data => {
        setDirectories(data.directories?.length ? data.directories : null);
        setSideNavTitles(data.files?.length ? data.files : null);
      });
    }
  }, [dirUpdate]);

  useEffect(() => {
    if(selected || directories){
      getSelectedRepo(selected, dirUpdate)
        .then(data => 
          setSideNavTitles(data)
        )
    }
  }, [selected])

  useEffect(() => {
    if (isEmptyObj(userInformation) && isUserAuth == true){
      setUserInformation(userInfo)
    }
    if (!isUserAuth){
      navigate("/");
    }
  }, [isUserAuth])
  
  return (
      <>
        <Divider />
        <TopicsCarousel 
          dirUpdate={dirUpdate}
          setDirUpdate={setDirUpdate}
          topicTitles={directories} 
          selected={selected}
          setSelected={setSelected}
          userRepos={userRepos}
          repoOnDropDownSelect={repoOnDropDownSelect}
        />
        <div className="card">
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
              languageOptions={languageOptions} 
              setLanguage={setLanguage} 
              language={language}
            />
            <PanelsCombined 
              theme={theme} 
              language={language}
              setTabsContainer={setTabsContainer}
              tabsContainer={tabsContainer}
              userInput={userInput}
              onChangeInput={onChangeInput}
              processingChecker1={processingChecker}
              showSelectedLangOnly={true}
              setTabsContainer1={setTabsContainer1}
              tabsContainer1={tabsContainer1}
              count={count}
              onChangeSolution={onChangeSolution}
              processingChecker2={processingChecker2}
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
          compareOutputs={compareOutputs}
          nextChallenge={nextChallenge}   
        /> 
      </>
  )
}

export default App

