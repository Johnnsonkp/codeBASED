import './switch.css'

import React from 'react'

function SwitchBtn({onClick, theme}) {
  return (
    <div>
      <label className="switch">
        <input readOnly type="checkbox" checked={theme == 'light'? true : false} onClick={onClick}/>
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default SwitchBtn