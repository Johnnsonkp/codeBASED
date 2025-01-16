import React from 'react'
import SidePanel from './SidePanel'

function SidePanelComb({sideNavTitles, loadSelectedChallenge, selected, directories, currentChallengeTitle, setSelected, dirUpdate}) {
  
  return (
    <>
      {sideNavTitles?
        <SidePanel 
          onClick={(e) => loadSelectedChallenge(e.target.innerText, selected, dirUpdate) } 
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