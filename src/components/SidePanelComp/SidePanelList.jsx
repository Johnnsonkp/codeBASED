import React from 'react'

export default function SidePanelList({sideNavTitles, setBtnSelected, onClick, btnSelected}) {
  
  return (
    <ul 
      style={{listStyle: 'none', padding: '0px'}}
    >
      {Array.isArray(sideNavTitles) && sideNavTitles?.map((title, index) => (
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
      ))
      // : ''
      }
    </ul>
  )
}
