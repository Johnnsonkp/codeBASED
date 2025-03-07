import React, {Suspense, lazy} from 'react'

import ShowHideSolution from '../CustomButtons/ShowHideSolution';
import TabSlide from '../Tabs/TabSlide'
import TextAreaComp from '../TextInputs/TextAreaComp';
import { cppLanguage } from '@codemirror/lang-cpp';

const CodeMirror = lazy(() => import("@uiw/react-codemirror"))

const Panel = ({
  mode, 
  language, 
  setTabsContainer, 
  tabsContainer, 
  userInput, 
  onChangeInput, 
  showSelectedLangOnly, 
  processing, 
  blur, 
  setBlur, 
  theme
}) => {
  const tabContent = {
    width: '31.5vw', 
    maxWidth: '550px',
    minWidth: '430px'
  }
  const CodeBlockOuter = {
    position: 'relative', 
    border: `${processing? "1px solid red" : ""}`, 
    width: `${processing? "102%" : ""}`,
    overflow: `${processing? "hidden" : ""}`,
  }
  const codeBlock = {
    border: `${processing? "1px solid blue" : `0.1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`}`,
    fontSize: '10px', 
    flexWrap: 'wrap', 
    textAlign: 'left',
    display: `${tabsContainer == "Code Challenge"? 'block' : 'none'}`,
    filter: `${mode == "solution" && blur? 'blur(2px)' : ''}`
  }
  const tabs = ["Code Challenge", "Code Explaination"]

  return (
    <div>
      <TabSlide
        language={language} 
        tabs={tabs}
        setTabsContainer={setTabsContainer}
        tabsContainer={tabsContainer}
        showSelectedLangOnly={showSelectedLangOnly}
      />
      <div className="tab-content" style={tabContent}>
        {tabsContainer == "Code Challenge"?
          <div style={CodeBlockOuter}>
            <Suspense fallback={<div>loading...</div>}>
                <CodeMirror 
                  value={userInput} 
                  extensions={[cppLanguage]} 
                  onChange={onChangeInput} 
                  width={'100%'}
                  height={'80vh'}
                  minHeight={'725px'}
                  maxHeight="725px"
                  theme={`${theme == 'light'? 'light' : 'dark'}`}
                  style={codeBlock}
                  className={`tab-panel ${tabsContainer == "Code Challenge"? 'activePanel' : ''} `}
                /> 
                {mode == "solution" ? <ShowHideSolution blur={blur} setBlur={setBlur}/> : ""}
              </Suspense> 
          </div>
          :
          <TextAreaComp tabsContainer1={tabsContainer} processingChecker1={processing}
            className={`tab-panel ${tabsContainer == "Code Explaination"? 'activePanel' : ''} `}
          />}
      </div>
    </div>
  )
}

export default Panel