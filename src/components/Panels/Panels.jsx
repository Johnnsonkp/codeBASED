import React, { useState } from 'react'

import CodeMirror from '@uiw/react-codemirror';
import ShowHideSolution from '../CustomButtons/ShowHideSolution';
import TabSlide from '../Tabs/TabSlide'
import TextAreaComp from '../TextInputs/TextAreaComp';
import { cppLanguage } from '@codemirror/lang-cpp';
import { useTheme } from '../theme-provider';

export function LeftPanel({language, setTabsContainer, tabsContainer, userInput, onChangeInput, processingChecker2, showSelectedLangOnly, processingChecker1}) {
  const { theme } = useTheme();
  
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
          <div 
            style={{ 
              position: 'relative', 
              border: `${processingChecker1? "1px solid red" : ""}`, 
              width: `${processingChecker1? "102%" : ""}`,
              overflow: `${processingChecker1? "hidden" : ""}`,
            }}
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
            </div>
            :
          <TextAreaComp 
            processingChecker1={processingChecker2}
            className={`tab-panel ${tabsContainer == "Code Explaination"? 'activePanel' : ''} `}
          />
        }
      </div>
    </div>
  )
}

export function RightPanel({ language, setTabsContainer1, tabsContainer1, count, onChangeSolution, processingChecker2}) {
  const [blur, setBlur] = useState(true);
  const { theme } = useTheme();

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
              border: `${processingChecker2? "1px solid red" : ""}`, 
              width: `${processingChecker2? "102%" : ""}`,
              overflow: `${processingChecker2? "hidden" : ""}`,
            }}
          >
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
          </div>
          :
          <TextAreaComp 
            processingChecker2={processingChecker2}
            className={`tab-panel `}
          />
        }
      </div>
    </div>
  )
}
