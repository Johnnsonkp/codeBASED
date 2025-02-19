import {useContext, useState} from 'react'

import { ChallengeContext } from '../../store/challengeStore.jsx';
import { UserContext } from '../../store/userStore.jsx';

function TopBanner() {
  const {state} = useContext(UserContext);
  const {challengeState, challengeDispatch} = useContext(ChallengeContext);
  const appStatus = state.app_status;
  const [toggle, setToggle] = useState(false);
  const statusColor = appStatus.status || challengeState.solutionStatus.status
  
  const bannerAlert = ({
    "error": "#FCEBEB",
    "correct": '#51FA7B'
  })
  
  return (
    <div
      style={{
        backgroundColor: bannerAlert[statusColor] || "", 
        color: '#333', 
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        display: toggle? "none" : "block"
      }}
    >
      {appStatus.message}
      {challengeState.solutionStatus.message}

      <button 
        style={{
          position: 'relative', 
          left: '38vw', 
          padding: '3px 10px', 
          margin: '5px', 
          display: statusColor? "inline-block" : "none"
        }}
        onClick={() => challengeDispatch({type: "RESET"})}
      >
        X
      </button>
    </div>
  )
}

export default TopBanner