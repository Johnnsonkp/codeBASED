import '../../App.css'

import { ChallengeContext } from '../../store/context/ChallengeContext'
import DefaultButton from '../Buttons/DefaultButton'
import { handleCompile } from '../../store/actions/challengeActions'
import { nextChallenge } from '../../store/actions/challengeActions'
import { useContext } from 'react'

function Footer({ sideNavTitles, currentChallengeTitle, selected, dirUpdate}) {
  const {challengeState, challengeDispatch} = useContext(ChallengeContext)

  const handleNextChallenge = () => {
    nextChallenge(sideNavTitles, currentChallengeTitle, selected, dirUpdate, challengeDispatch)
  }

  const actionCompareOutput = () => {
    const user_stdout = challengeState.userSolutionExecutionState.userOutputDetails
    const solution_stdout = challengeState.solutionExecutionState.solutionOutputDetails

    handleCompile(user_stdout.stdout, solution_stdout.stdout, challengeDispatch)
  }
  
  return (
    <div 
      style={{
        width: "100%", 
        position: 'fixed', 
        bottom: '0px', 
        left: '0px',
      }}>
        <div 
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)", 
            padding: "5px 30px", 
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", 
            backdropFilter: "blur(10px)",
            justifyContent: 'space-between',
            display: 'flex'
          }}
        >
          <div style={{width: '40%', textAlign: 'left'}}>
            <DefaultButton title={`Score: ${challengeState.score}`} />
          </div>
          <div style={{textAlign: 'right', width: '', display: 'flex', justifyContent: 'space-evenly'}}>
            <DefaultButton title={'Check Output'} onClick={() => actionCompareOutput()}/>
            <DefaultButton title={'Next'} onClick={() => handleNextChallenge()}/>
          </div>
        </div>
      </div>
  )
}

export default Footer