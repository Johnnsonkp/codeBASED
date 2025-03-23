import './App.css'
import './components/Tabs/tabs.css'

import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import {checkSolutionStatus, checkStatus} from './components/CodeCompiler/status.js'
import { compileHeaders, compileOptions } from './Service/CompileAPI.js';
import { fetchDefaultRepos, getSelectedRepo, getSelectedRepoOnDropDown } from './api/challengeService.js';

import { ChallengeContext } from './store/context/ChallengeContext.jsx';
import LoadingOverlay from './components/Common/Loading/Loading.jsx';
import { UserContext } from './store/context/UserContext.jsx';
import axios from "axios";
import { codingChallengeUpdated } from './store/actions/challengeActions.jsx';
import { dummyTopicTitles } from './helpers/DummyData.js';
import { handleCompareOutput } from './store/actions/challengeActions.jsx';
import { languageOptions } from './helpers/Language';
import { loadUserContents } from './store/actions/challengeActions.jsx';
import { postDataToAPIv2 } from './Service/CompileAPI.js';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { useTheme } from './components/theme-provider';

const Footer = lazy( ()=> import('./components/Common/Footer.jsx'))
const Divider = lazy(() => import('./components/Common/Divider.jsx'));
const OutputWindows = lazy(() => import('./components/CodeCompiler/OutputWindows.jsx'));
const PanelsCombined = lazy(() => import('./components/Panels/PanelsCombined.jsx')) 
const SidePanelComb = lazy(() => import('./components/SidePanel/SidePanelComb.jsx'));
const SidePanelContainer = lazy(() => import('./components/SidePanelComp/SidePanelContainer.jsx'));
const TopicsCarousel = lazy(() => import('./components/TopicsCarousel/Topics.jsx'));

function App() {
  const theme = useTheme();
  const {userState} = useContext(UserContext)
  const {challengeState, challengeDispatch} = useContext(ChallengeContext)
  const isUserAuth = userState.authorised
  const userInfo = userState.user
  const [userInformation, setUserInformation] = useState(null)
  const navigate = useNavigate()
  const [count, setCount] = useState('')
  const [userInput, setUserInput] = useState(challengeState.selectedCodeChallenge.startingCode)
  const [selected, setSelected] = useState(false)
  const [sideNavTitles, setSideNavTitles] = useState()
  const [language, setLanguage] = useState(languageOptions.filter((lang) => lang.value == 'c'))
  const [currentChallengeTitle, setCurrentChallengeTitle] = useState(challengeState.selectedCodeChallenge.title);
  const tabs = ["Code Challenge", "Code Explaination"]
  const [tabsContainer, setTabsContainer] = useState(tabs[0])
  const [tabsContainer1, setTabsContainer1] = useState(tabs[0])
  const [directories, setDirectories] = useState()
  const [userRepos, setUserRepos] = useState(challengeState.userRepositories.repos)
  const [dirUpdate, setDirUpdate] = useState()
  const [repoOnDropDownSelect, setRepoOnDropDownSelect] = useState()
  const user_stdout = challengeState.userSolutionExecutionState.userOutputDetails
  const solution_stdout = challengeState.solutionExecutionState.solutionOutputDetails

  const compareOutputs = () => {
    const userOutput = btoa(user_stdout?.stdout);
    const solutionOutput = btoa(solution_stdout?.stdout);
    handleCompareOutput(userOutput, solutionOutput, challengeDispatch)
  }

//////////////////////////////////////////////////////////////////////////////////////////////////
  const handleCompile = (userInput) => {
    challengeDispatch({type: "SET_USER_PROCESSING"})
    const formData = {
      language_id: language[0].id,
      source_code: btoa(userInput),
      stdin: btoa(''),
    };
    const options = compileOptions(formData, compileHeaders)
    postDataToAPIv2(
      "SET_USER_OUTPUT",
      axios,
      checkStatus,
      options,
      challengeDispatch
    )
  };
  const handleSolutionCompile = (count) => {
    challengeDispatch({type: "SET_SOLUTION_PROCESSING"})
    const formData = {
      language_id: language[0].id,
      source_code: btoa(count),
      stdin: btoa(''),
    };
    const options = compileOptions(formData, compileHeaders)
    postDataToAPIv2(
      "SET_SOLUTION_OUTPUT",
      axios,
      checkStatus,
      options, 
      challengeDispatch
    )
  };
//////////////////////////////////////////////////////////////////////////////////////////////////

  const onChangeInput = useCallback((val, viewUpdate) => {
    setUserInput(val);
  }, []);

  const onChangeSolution = useCallback((val, viewUpdate) => {
    setCount(val);
  }, []);

  const handleUserContents = (data) => {
    let userRepos = data;
    let repo = userRepos?.filter((repo) => repo === "holbertonschool-low_level_programming");
    let defaultRepo = repo[0]? repo[0] : userRepos[0];
    
    setRepoOnDropDownSelect(defaultRepo);
    fetchDefaultRepos(defaultRepo)
      .then(response => {
        const directories = response?.directories?.length > 0 ? response.directories : null;
        const files = response?.files?.length > 0 ? response.files : null;
        setDirectories(directories || dummyTopicTitles);
        setSideNavTitles(files);
      })
  }

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
        .then(data => {
          setSideNavTitles(data)
        })
    }
  }, [selected])

  useEffect(() => {
    if (userInformation == null && isUserAuth == true){
      setUserInformation(userInfo)
      loadUserContents(userInfo, setUserRepos, handleUserContents, challengeDispatch, dummyTopicTitles)
    }
    else{
      alert("user not authorised")
      navigate("/");
    }
  }, [isUserAuth])

  useEffect(() => {
    if(challengeState.selectedCodeChallenge.update == true){
      let cchallenge = challengeState.selectedCodeChallenge
      
      setCount(cchallenge.code)
      setUserInput(challengeState.selectedCodeChallenge.startingCode)
      setCurrentChallengeTitle(cchallenge.title)
      codingChallengeUpdated(challengeDispatch)
    }
  }, [challengeState.selectedCodeChallenge.update])
  
  return (
    <Suspense fallback={<LoadingOverlay />}>
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
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute'
        }}
      >
        <div>
          <SidePanelContainer>
            <SidePanelComb
              sideNavTitles={sideNavTitles} 
              selected={selected} 
              directories={directories} 
              currentChallengeTitle={currentChallengeTitle} 
              setSelected={setSelected}
              dirUpdate={dirUpdate}
            />
          </SidePanelContainer>
        </div>
          <PanelsCombined 
            theme={theme} 
            language={language}
            setTabsContainer={setTabsContainer}
            tabsContainer={tabsContainer}
            userInput={userInput}
            onChangeInput={onChangeInput}
            showSelectedLangOnly={true}
            setTabsContainer1={setTabsContainer1}
            tabsContainer1={tabsContainer1}
            count={count}
            onChangeSolution={onChangeSolution}
          />
          <OutputWindows
            language={language}
            languageOptions={languageOptions}
            setLanguage={setLanguage}
            handleCompile={handleCompile} 
            userInput={userInput} 
            handleSolutionCompile={handleSolutionCompile} 
            count={count} 
          />
      </div>
      <Footer 
        compareOutputs={compareOutputs}
        sideNavTitles={sideNavTitles} 
        currentChallengeTitle={currentChallengeTitle} 
        selected={selected} 
        dirUpdate={dirUpdate}
      /> 
  </Suspense>
  )
}

export default App

