import '../../App.css'

import { ChallengeContext } from '../../store/challengeStore'
import DefaultButton from '../Buttons/DefaultButton'
import { useContext } from 'react'

function Footer({ compareOutputs, nextChallenge}) {
  const {challengeState} = useContext(ChallengeContext)
  
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
            <DefaultButton title={'Check Output'} onClick={() => compareOutputs()}/>
            <DefaultButton title={'Next'} onClick={() => nextChallenge()}/>
          </div>
        </div>
      </div>
  )
}

export default Footer