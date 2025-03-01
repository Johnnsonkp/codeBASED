import React, {Suspense, lazy, useContext, useState} from 'react'

import { ChallengeContext } from '../../store/context/ChallengeContext';
import ShowHideSolution from '../CustomButtons/ShowHideSolution';
import TabSlide from '../Tabs/TabSlide'
import TextAreaComp from '../TextInputs/TextAreaComp';
import { cppLanguage } from '@codemirror/lang-cpp';
import { useTheme } from '../theme-provider';

const CodeMirror = lazy(() => import("@uiw/react-codemirror"))

export function LeftPanel({language, setTabsContainer, tabsContainer, userInput, onChangeInput, showSelectedLangOnly}) {
  const { theme } = useTheme();
  const {challengeState} = useContext(ChallengeContext)
  const processing = challengeState.userSolutionExecutionState.userProcessing
  
  return (
    <div>
      <TabSlide
        language={language} 
        tabs={["Code Challenge", "Code Explaination"]}
        setTabsContainer={setTabsContainer}
        tabsContainer={tabsContainer}
        showSelectedLangOnly={showSelectedLangOnly}
      />
      <div className="tab-content" 
        style={{width: '30vw', maxWidth: '550px'}}
      >
        {tabsContainer == "Code Challenge"?
          <Suspense
            style={{ 
              position: 'relative', 
              border: `${processing? "1px solid red" : ""}`, 
              width: `${processing? "102%" : ""}`,
              overflow: `${processing? "hidden" : ""}`,
            }}
            fallback={<div>Test...</div>}
          >
              <CodeMirror 
                value={userInput} 
                extensions={[cppLanguage]} 
                onChange={onChangeInput} 
                width={'100%'}
                height={'80vh'}
                minHeight={'725px'}
                maxHeight="725px"
                theme={`${theme == 'light'? 'light' : 'dark'}`}
                style={{fontSize: '10px', flexWrap: 'wrap', textAlign: 'left'}}
                className={`tab-panel ${tabsContainer == "Code Challenge"? 'activePanel' : ''} `}
              /> 
            </Suspense>
            :
          <TextAreaComp 
            processingChecker1={processing}
            className={`tab-panel ${tabsContainer == "Code Explaination"? 'activePanel' : ''} `}
          />
        }
      </div>
    </div>
  )
}

export function RightPanel({ language, setTabsContainer1, tabsContainer1, count, onChangeSolution}) {
  const [blur, setBlur] = useState(true);
  const { theme } = useTheme();
  const {challengeState} = useContext(ChallengeContext)
  const processing = challengeState.solutionExecutionState.solutionProcessing

  return (
    <div>
      <TabSlide
        language={language} 
        tabs={["Solution", "Solution Explained"]}
        setTabsContainer={setTabsContainer1}
        tabsContainer={tabsContainer1}
      />
      <div className="tab-content" 
        style={{ width: '30vw', maxWidth: '550px'}}
      >
        {tabsContainer1 == "Solution"?
          <div 
            style={{ 
              position: 'relative', 
              border: `${processing? "1px solid red" : ""}`, 
              width: `${processing? "102%" : ""}`,
              overflow: `${processing? "hidden" : ""}`,
            }}
          >
          <Suspense fallback={<div>Test...</div>}>
            <CodeMirror 
              value={count} 
              extensions={[cppLanguage]} 
              onChange={onChangeSolution} 
              width={'100%'}
              height={'80vh'}
              minHeight={'725px'}
              maxHeight="725px"
              theme={`${theme == 'light'? 'light' : 'dark'}`}
              style={{fontSize: '10px', flexWrap: 'wrap', textAlign: 'left', position: 'relative', filter: `${blur? 'blur(2px)' : ''}`}}
              className={`tab-panel ${tabsContainer1 == "Solution"? 'activePanel' : ''} `}
            />
            <ShowHideSolution blur={blur} setBlur={setBlur}/>
          </Suspense>
          </div>
          :
          <TextAreaComp 
            processingChecker2={processing}
            className={`tab-panel `}
          />
        }
      </div>
    </div>
  )
}

const PanelsCombined = (
  {theme, language, setTabsContainer, tabsContainer, userInput, onChangeInput, setTabsContainer1, tabsContainer1, count, onChangeSolution
    
  }) => {

  return (
    <>
      <LeftPanel 
        theme={theme}
        language={language}
        setTabsContainer={setTabsContainer}
        tabsContainer={tabsContainer}
        userInput={userInput}
        onChangeInput={onChangeInput}
        showSelectedLangOnly={true}
      />

      <RightPanel
        theme={theme} 
        language={language}
        setTabsContainer1={setTabsContainer1}
        tabsContainer1={tabsContainer1}
        count={count}
        onChangeSolution={onChangeSolution}
        showSelectedLangOnly={false}
      />
    </>
  )
}

export default PanelsCombined