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
        // border: '1px solid #EBEBEB',
        border: `1px solid ${theme == 'light'? "#EBEBEB" : "rgba(255, 255, 255, 0.4)" }`,
        width: '200px', 
        overflow: 'hidden', 
        padding: '5px', 
        paddingTop: '0px', 
        borderRadius: '10px', 
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        minHeight: '300px',
        maxHeight: "700px",
        overflow: "scroll"
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
                overflow: 'hidden'
              }}
            >{title}
          </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
