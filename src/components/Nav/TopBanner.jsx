import {useContext, useState} from 'react'

// import { ChallengeContext } from '../../store/challengeProvider.jsx';
import { ChallengeContext } from '../../store/context/ChallengeContext.jsx';
import { UserContext } from '../../store/context/UserContext.jsx';
import styles from './Nav.module.css'

function TopBanner() {
  const {userState} = useContext(UserContext);
  const {challengeState, challengeDispatch} = useContext(ChallengeContext);
  const appStatus = userState.app_status;
  const [toggle, setToggle] = useState(false);
  const statusColor = appStatus.status || challengeState.solutionStatus.status
  
  const bannerAlert = ({
    "error": "#FCEBEB",
    "correct": '#51FA7B'
  })
  
  return (
    <div
      className={styles.banner}
      style={{
        backgroundColor: bannerAlert[statusColor] || "", 
        display: toggle? "none" : "flex"
      }}
    >
      {appStatus.message}
      {challengeState.solutionStatus.message}

      <button
        className={styles.cancelbtn} 
        style={{display: statusColor? "inline-block" : "none"}}
        onClick={() => challengeDispatch({type: "RESET"})}
      >
        X
      </button>
    </div>
  )
}

export default TopBanner