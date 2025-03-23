import { ChallengeContext } from '../../store/context/ChallengeContext'
import React from 'react'
import SidePanel from './SidePanel'
import { loadSelectedChallenge } from '../../store/actions/challengeActions'
import { useContext } from 'react';

function SidePanelComb(
  {
    sideNavTitles, 
    selected, 
    directories, 
    currentChallengeTitle, 
    setSelected, 
    dirUpdate, 
  }) {
  const {challengeState, challengeDispatch} = useContext(ChallengeContext)

  const handleLoadSelectedChallenge = (e) => {
    loadSelectedChallenge(e.target.innerText, selected, dirUpdate, challengeDispatch)
  }
  
  return (
    <>
      {Array.isArray(sideNavTitles) && sideNavTitles?
        <SidePanel 
          onClick={(e) => handleLoadSelectedChallenge(e)} 
          selected={selected} 
          sideNavTitles={sideNavTitles}
          topicTitles={directories}
          currentChallengeTitle={currentChallengeTitle}
        /> :
        <SidePanel 
          onClick={(e) => setSelected(e.target.innerText, selected) } 
          selected={selected} 
          sideNavTitles={directories}
          topicTitles={directories}
          currentChallengeTitle={currentChallengeTitle}
        />
      } 
    </>
  )
}

export default SidePanelComb