import React from 'react'

function RightPanel({language, setTabsContainer, tabsContainer, userInput, onChangeInput, processingChecker2}) {
  const [blur, setBlur] = useState(true);

  return (
    <div>
      <TabSlide
        language={language} 
        // tabs={tabs}
        tabs={["Code Challenge", "Code Explaination"]}
        setTabsContainer={setTabsContainer}
        tabsContainer={tabsContainer}
      />
      <div className="tab-content" >
        {tabsContainer == "Code Challenge"?
          <>
            {/* <CodeMirror 
              value={userInput} 
              extensions={[cppLanguage]} 
              onChange={onChangeInput} 
              width={'100%'}
              height={'80vh'}
              minHeight={'725px'}
              maxHeight="725px"
              theme={'dark'}
              style={{fontSize: '10px', flexWrap: 'wrap', textAlign: 'left'}}
              className={`tab-panel ${tabsContainer == "Code Challenge"? 'activePanel' : ''} `}
            />  */}
            <ShowHideSolution blur={blur} setBlur={setBlur}/>
          </>
          :
          <TextAreaComp 
            processingChecker1={processingChecker2}
            className={`tab-panel ${tabsContainer == "Code    Explaination"? 'activePanel' : ''} `}
          />
        }
      </div>
    </div>
  )
}

export default RightPanel