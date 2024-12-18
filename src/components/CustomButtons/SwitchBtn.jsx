import './switch.css'

import React from 'react'

function SwitchBtn({onClick, theme}) {
  return (
    <div style={{position: 'relative'}}>
      <label 
        className="switch"
        style={{
          position: "relative",
          display: "inline-block",
          height: "25px",
          width: "45px",
          borderRadius: "34px",
          backgroundColor: theme == 'light'? '#2196f3' : '#ccc' 
        }}
      >
        <input 
          readOnly 
          type="checkbox" 
          checked={theme == 'light'? true : false} 
          onClick={onClick}
        />
        <span className="slider"></span>
      </label>
   </div>
  )
}

export default SwitchBtn