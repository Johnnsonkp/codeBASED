import React, {useEffect, useState} from 'react'

import { useTheme } from './theme-provider';

export default function SidePanel({selected, sideNavTitles, onClick, topicTitles, currentChallengeTitle}) {
  const [btnSelected, setBtnSelected] = useState();
  const theme = useTheme()

  useEffect(() => {
    setBtnSelected(currentChallengeTitle)
  }, [currentChallengeTitle])
  return (
    <div 
      style={{
        border: "0.1px solid #606266",
        width: '160px', 
        overflow: 'scroll', 
        padding: '5px', 
        paddingTop: '0px', 
        borderRadius: '10px', 
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        // height: '100%',
        maxHeight: '785px',
        minHeight: '785px',
        // overflow: 'hidden',
        // width: '100%',
      }}
    >
      <h5 style={{marginBottom: '10px', textAlign: 'center'}}> {selected? selected.charAt(0).toUpperCase() + selected.slice(1) : "Repository"}</h5>
      <hr style={{color: '#EBECF3', backgroundColor: '#EBECF3', opacity: '0.2'}}></hr>

        <ul style={{listStyle: 'none', padding: '0px'}}>
          {sideNavTitles && sideNavTitles.map((title, index) => (
            <li key={index} style={{fontSize: '12px', margin: '5px'}} 
              onClick={() => setBtnSelected(title)
            }>
              <button 
                onClick={onClick} 
                style={{
                  width: '100%', 
                  textAlign: 'left', 
                  backgroundColor: btnSelected == title? 'rgb(80, 250, 123)' : '',
                  color: btnSelected == title? '#333' : '',
                  overflow: 'hidden',
                  paddingLeft: '7px'
                }}
              >{title}
            </button>
            </li>
          ))}
        </ul>
      
    </div>
  )
}
