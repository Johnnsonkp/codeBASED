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
    console.log("handleLoadSelectedChallenge", "selected", selected, "dirUpdate", dirUpdate)
    loadSelectedChallenge(e.target.innerText, selected, dirUpdate, challengeDispatch)
  }

  // console.log("SidePanelList.jsx sidePanelCombined:", sideNavTitles, "Type:", typeof sideNavTitles, "Is array:", Array.isArray(sideNavTitles));

  console.log("selected", selected, "dirUpdate", dirUpdate)
  
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