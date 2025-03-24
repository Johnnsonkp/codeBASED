import React, {Suspense, lazy} from 'react'

import ShowHideSolution from '../CustomButtons/ShowHideSolution';
import TabSlide from '../Tabs/TabSlide'
import TextAreaComp from '../TextInputs/TextAreaComp';
import { cppLanguage } from '@codemirror/lang-cpp';
import { useTheme } from '../theme-provider';

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
}) => {
  const {theme, setTheme} = useTheme()
  const tabs = ["Code Challenge", "Code Explaination"]
  
  const tabContent = {
    margin: '0px',
    width: '100%',
    overflow: 'hidden'
  }
  const CodeBlockOuter = {
    position: 'relative', 
    border: `${processing? "1px solid red" : ""}`, 
    width: `${processing? "102%" : "100%"}`,
    overflow: `${processing? "hidden" : ""}`,
  }
  const codeBlock = {
    fontSize: '10px', 
    flexWrap: 'wrap', 
    textAlign: 'left',
    border: `${processing? "1px solid blue" : `0.1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`}`,
    display: `${tabsContainer == "Code Challenge"? 'block' : 'none'}`,
    filter: `${mode == "solution" && blur? 'blur(2px)' : ''}`,
  }

  return (
    <div 
      style={{
        width: '33.2vw', 
        margin: '2px',  
        background: `${theme == 'light'? '#fff' : '#282C34'}`, 
      }}
    >
      <TabSlide
        language={language} 
        tabs={tabs}
        setTabsContainer={setTabsContainer}
        tabsContainer={tabsContainer}
        showSelectedLangOnly={showSelectedLangOnly}
      />
      <div style={tabContent}>
        {tabsContainer == "Code Challenge"?
          <div style={CodeBlockOuter}>
            <Suspense fallback={<div>loading...</div>}>
              <CodeMirror 
                value={userInput} 
                extensions={[cppLanguage]} 
                onChange={onChangeInput} 
                style={codeBlock}
                width={'100%'}
                height={'100vh'}
                minHeight={'725px'}
                theme={`${theme == 'light'? 'light' : 'dark'}`}
                className={`tab-panel ${tabsContainer == "Code Challenge" && 'activePanel'}`}
              /> 
              {mode == "solution" && <ShowHideSolution theme={theme} blur={blur} setBlur={setBlur}/>}
            </Suspense> 
          </div>:
          <TextAreaComp 
            tabsContainer1={tabsContainer} 
            processingChecker1={processing}
            className={`tab-panel ${tabsContainer == "Code Explaination" && 'activePanel'}`}
          />}
      </div>
    </div>
  )
}

export default Panel