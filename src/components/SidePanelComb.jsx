import React from 'react'
import SidePanel from './SidePanel'

function SidePanelComb({sideNavTitles, loadSelectedChallenge, selected, directories, currentChallengeTitle, setSelected}) {
  return (
    <div 
      style={{
        flex: '0.1', 
        position: 'relative',
        height: '100%',
        maxHeight: '785px',
        minHeight: '785px',
        // overflowY: 'hidden'
      }}
    >
      {sideNavTitles?
        <SidePanel 
          onClick={(e) => loadSelectedChallenge(e.target.innerText, selected) } 
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
    </div>
  )
}

export default SidePanelComb