import CodeMirror from '@uiw/react-codemirror';
import React from 'react'
import ShowHideSolution from './CustomButtons/ShowHideSolution'
import TabSlide from './Tabs/TabSlide';
import { cppLanguage } from '@codemirror/lang-cpp';
// import { languageOptions } from './helpers/Language';

function TextEditors({processingChecker2, processingChecker, userInput, count, dummyCode, onChange, onChangeSolution, blur, setBlur}) {
  return (
    <div 
    style={{ 
      textAlign: 'left', 
      margin: '10px', 
      marginTop: '10px', 
      display: 'flex', 
      borderRadius: '5px', 
      borderBottom: '1px solid lightGray',
      // border: '1px solid green',
      maxHeight: '700px',
      height: '100%',
      overflowY: 'scroll'
    }}
  >
      <TabSlide 
        tabs={["Code Challenge", "Code Explaination"]}
        contents={[
          <div style={{position: 'relative', border: `${processingChecker2? "2px solid red" : ""}`, width: `${processingChecker2? "101%" : ""}` }}> 
            <CodeMirror 
              value={userInput} 
              extensions={[cppLanguage]} 
              onChange={onChange} 
              width={'28vw'}
              height={'80vh'}
              maxHeight="700px"
              theme={'dark'}
              style={{fontSize: '10px', flexWrap: 'wrap'}}
            />
          </div>,
            <textarea 
              defaultValue={"## Explain your code in detail"} 
              style={{width: '100%', 
                height: '80vh', 
                maxHeight: '700px', boxSizing: 'border-box'}}
            >
            </textarea>
        ]}
      />
      <TabSlide 
        tabs={["Solution", "Solution Explained"]}
        contents={[
          <div style={{position: 'relative', border: `${processingChecker? "2px solid red" : ""}`, width: `${processingChecker? "101%" : ""}` }}>
            <CodeMirror 
              value={count || dummyCode} 
              extensions={[cppLanguage]} 
              onChange={onChangeSolution} 
              width={'28vw'}
              height={'80vh'}
              maxHeight="700px"
              theme={'dark'}
              style={{fontSize: '10px', display: 'flex', flexWrap: 'wrap', filter: `${blur? 'blur(2px)' : ''}`}}
            />
            <ShowHideSolution blur={blur} setBlur={setBlur}/>
          </div>,
          <textarea 
          defaultValue={"## Explain the solution code in detail"} 
            style={{width: '100%', height: '80vh', boxSizing: 'border-box', maxHeight: '700px',}}
          >
          </textarea>
        ]}
      />
  </div>
  )
}

export default TextEditors