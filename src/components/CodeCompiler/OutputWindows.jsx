import React, {useContext} from 'react'

import { ChallengeContext } from '../../store/context/ChallengeContext'
import CompileBtn from '../CustomButtons/CompileBtn'
import OutputDetails from '../outputWindow/OutputDetails'
import OutputWindow from '../outputWindow/OutputWindow'
import { useTheme } from '../theme-provider'

function OutputWindows({handleCompile, userInput, handleSolutionCompile, count}) {
  const { theme } = useTheme();
  const {challengeState} = useContext(ChallengeContext)
  const user_stdout = challengeState.userSolutionExecutionState.userOutputDetails
  const user_processing = challengeState.userSolutionExecutionState.userProcessing 
  const solution_stdout = challengeState.solutionExecutionState.solutionOutputDetails
  const solution_processing = challengeState.solutionExecutionState.solutionProcessing

  return (
    <div 
      style={{
        border: `1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
        borderRadius: '5px', 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'left', 
        flex: '0.1', 
        marginLeft: '15px', 
        minHeight: '520px', 
        padding: '10px', 
      }}
    >
        <div 
          style={{
            display: "flex", 
            flexShrink: 0, 
            flexDirection: 'column'
          }}
        >
          <OutputWindow outputDetails={user_stdout} title={"User Output"}/>
          <CompileBtn 
            onClick={() => handleCompile(userInput)} 
            userInput={userInput} 
            processing={user_processing}
          />
        </div>
        <div 
          style={{border: '0.1px solid #606266', background: 'lightGray', marginTop: '25px', marginBottom: '10px'}}
        >
        </div>
        <div style={{display: "flex", flexShrink: 0, flexDirection: 'column'}}>
          <OutputWindow outputDetails={solution_stdout} title={"Solution Output"}/>
          <CompileBtn 
            onClick={() => handleSolutionCompile(count)} 
            userInput={count} 
            processing={solution_processing}
          />
        </div>
        
        <div style={{marginTop: '20px'}}>
          {user_stdout && <OutputDetails outputDetails={user_stdout} title={"User output"} />}
          {solution_stdout && <OutputDetails outputDetails={solution_stdout} title={"Solution output"}/>}
        </div>
    </div>
  )
}

export default OutputWindows