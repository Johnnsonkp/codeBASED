import React, {useCallback} from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageNav from './Languages/LanguageNav';
import ShowHideSolution from './CustomButtons/ShowHideSolution'
import TabSlide from './Tabs/TabSlide';
import { cppLanguage } from '@codemirror/lang-cpp';
import { languageOptions } from './constants/languageOptions';

function TextEditors({processingChecker2, processingChecker, userInput, count, dummyCode, onChange, onChangeSolution, blur, setBlur, setToggleLargeEditor, toggleLargeEditor, language, setLanguage}) {
  
  return (
    <div 
    style={{ 
      textAlign: 'left', 
      // margin: '10px', 
      marginTop: '0px !important', 
      marginBottom: '100px',
      display: 'flex', 
      borderRadius: '5px', 
      maxHeight: '750px',
      minHeight: '750px',
    }}
  >
    
    <div style={{display: 'flex', minWidth: '910px', marginLeft: 'auto', marginRight: 'auto'}}>
      <TabSlide
        language={language} 
        tabs={["Code Challenge", "Code Explaination"]}
        contents={[
          <div
            key={1} 
            style={{
              position: 'relative', 
              border: `${processingChecker2? "2px solid orange" : ""}`, 
              width: `${processingChecker2? "101%" : ""}`
            }}
          > 
            <CodeMirror 
              value={userInput} 
              extensions={[cppLanguage]} 
              onChange={onChange} 
              width={'100%'}
              height={'80vh'}
              minHeight={'725px'}
              maxHeight="725px"
              theme={'dark'}
              style={{fontSize: '10px', flexWrap: 'wrap'}}
            />
            {/* <ShowHideSolution blur={blur} setBlur={setBlur}/> */}
            <button 
              style={{position: 'absolute', top: '5px', left: '90%', fontSize: '12px', padding: "6px", borderRadius: '12px', 
                backgroundColor: "rgba(255, 255, 255, 0.1)", color: '#f4f4f4'}}
              onClick={() => setToggleLargeEditor(!toggleLargeEditor)}>[]</button>
          </div>,
          <div 
            key={12}
            style={{
              border: `${processingChecker2? "2px solid orange" : ""}`, 
              width: `${processingChecker2? "101%" : ""}`
            }}
          >
            <textarea 
              defaultValue={"## Explain your code in detail"} 
              style={{
                width: '99%', 
                height: '78vh', 
                maxHeight: '725px', 
              }}
            >
            </textarea>
          </div>
        ]}
      />
      <TabSlide 
        tabs={["Solution", "Solution Explained"]}
        contents={[
          <div 
            key={3}
            style={{ position: 'relative', border: `${processingChecker? "2px solid red" : ""}`, width: `${processingChecker? "101%" : ""}` }}>
            <CodeMirror 
              value={count || dummyCode} 
              extensions={[cppLanguage]} 
              onChange={onChangeSolution} 
              width={'100%'}
              height={'80vh'}
              minHeight={'725px'}
              maxHeight="725px"
              theme={'dark'}
              style={{fontSize: '10px', flexWrap: 'wrap', filter: `${blur? 'blur(2px)' : ''}`}}
            />
            <ShowHideSolution blur={blur} setBlur={setBlur}/>
          </div>,
          <div 
            key={4}
            style={{
              border: `${processingChecker2? "2px solid orange" : ""}`, 
              width: `${processingChecker2? "101%" : ""}`
            }}
          >
            <textarea 
              defaultValue={"## Explain the solution code in detail"} 
              style={{
                width: '100%', 
                height: '78vh', 
                maxHeight: '725px'
              }}
            >
            </textarea>
          </div>
        ]}
      />
      </div>
  </div>
  )
}

export default TextEditors