import './App.css'
import './components/Tabs/tabs.css'

import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import {checkSolutionStatus, checkStatus} from './components/CodeCompiler/status.js'
import { compileHeaders, compileOptions } from './Service/CompileAPI.js';
import { fetchDefaultRepos, getAllRepos, getSelectedCodeChallenge, getSelectedRepo, getSelectedRepoOnDropDown } from './api/challengeService.js';

import { ChallengeContext } from './store/context/ChallengeContext.jsx';
import LoadingOverlay from './components/Common/Loading/Loading.jsx';
import { UserContext } from './store/context/UserContext.jsx';
import axios from "axios";
import { dummyTopicTitles } from './helpers/DummyData.js';
import { extractCodeInstructions } from './helpers/CodeExtract.js';
import { handleCompareOutput } from './store/actions/challengeActions.jsx';
import { isEmptyObj } from './helpers/utils.js';
import { languageOptions } from './helpers/Language';
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
  const {userState} = useContext(UserContext)
  const {challengeState, challengeDispatch} = useContext(ChallengeContext)
  const isUserAuth = userState.authorised
  const userInfo = userState.user
  const [userInformation, setUserInformation] = useState(userInfo)
  const navigate = useNavigate()
  
  const [count, setCount] = useState('')
  const [userInput, setUserInput] = useState()
  const [selected, setSelected] = useState(false)
  const [sideNavTitles, setSideNavTitles] = useState()
  const [language, setLanguage] = useState(languageOptions.filter((lang) => lang.value == 'c'))
  const [currentChallengeTitle, setCurrentChallengeTitle] = useState(null);
  const tabs = ["Code Challenge", "Code Explaination"]
  const [tabsContainer, setTabsContainer] = useState(tabs[0])
  const [tabsContainer1, setTabsContainer1] = useState(tabs[0])
  const [directories, setDirectories] = useState()
  const [userRepos, setUserRepos] = useState()
  const [dirUpdate, setDirUpdate] = useState()
  const [repoOnDropDownSelect, setRepoOnDropDownSelect] = useState()
  const theme = useTheme();
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
        const directories = response?.directories?.length > 0 ? response.directories : null;
        const files = response?.files?.length > 0 ? response.files : null;
        setDirectories(directories || dummyTopicTitles);
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
        .then(data => {
          setSideNavTitles(data)
        }
        )
    }
  }, [selected])

  useEffect(() => {
    if (isEmptyObj(userInformation) && isUserAuth == true){
      setUserInformation(userInfo)
    }
  }, [isUserAuth])

  useEffect(() => {
    if (!isUserAuth){
      alert("user not authorised")
      navigate("/");
    }
  }, [])

  const container = {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute'
  }

  
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
      <div style={container}>
        <div >
          <SidePanelContainer>
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
        nextChallenge={nextChallenge}   
      /> 
  </Suspense>
  )
}

export default App

