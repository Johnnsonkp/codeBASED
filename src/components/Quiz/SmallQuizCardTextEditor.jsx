import './singleQuizCard.css';

import React, {Suspense, lazy, useCallback, useState} from 'react'

import ShowHideSolution from '../CustomButtons/ShowHideSolution';
import { cppLanguage } from '@codemirror/lang-cpp';

const CodeMirror = lazy(() => import("@uiw/react-codemirror"))

function SmallQuizCardTextEditor({ id, topic, subcategory, type, question, correct_answer, incorrect_answers}) {
  const [blur, setBlur] = useState(true);
  const [answerVal, setAnswerVal] = useState()
  
  const codeBlock = {
    fontSize: '10px', 
    textAlign: 'left',
    width: '450px',
    flexWrap: 'wrap',
    overFlow: 'scroll',
  }
  const solutionCodeBlock = {
    fontSize: '10px', 
    textAlign: 'left',
    width: '450px',
    flexWrap: 'wrap',
    overFlow: 'scroll',
    filter: `${blur? 'blur(2px)' : ''}`
  }
  const CodeBlockOuter = {
    position: 'relative', 
  }

  const onChangeInput = useCallback((val, viewUpdate) => {
    setAnswerVal(val);
  }, []);

  const handleSubmit = () => {
    if(answerVal.trim() == correct_answer.trim()){
      alert("true")
    }
    else{
      alert("false")
      console.log(answerVal.trim())
      console.log(correct_answer.trim())
    }
  }

  return (
    <div style={CodeBlockOuter}>
      <div className="text-editor" key={id}>
        <p className="header">{question || ""}</p>
        <div className="options" >
          <Suspense fallback={<div>loading...</div>}>
            <CodeMirror  
              extensions={[cppLanguage]}  
              minHeight={'100%'}
              maxWidth='350px'
              style={codeBlock}
              theme={'dark'}
              value={answerVal}
              onChange={onChangeInput}
            /> 
            <CodeMirror  
              extensions={[cppLanguage]}  
              minHeight={'225px'}
              maxWidth='350px'
              style={solutionCodeBlock}
              theme={'dark'}
              value={correct_answer}
            />
            <ShowHideSolution blur={blur} setBlur={setBlur}/>
          </Suspense>
        </div>
        <button
          onClick={handleSubmit}
         className='submit-button'>Submit</button>
      </div>
    </div>
  )
}

export default SmallQuizCardTextEditor