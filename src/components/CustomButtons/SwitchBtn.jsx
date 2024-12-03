import './switch.css'

import React from 'react'

function SwitchBtn({onClick, theme}) {
  return (
    <label className="switch">
      <input readOnly type="checkbox" checked={theme == 'light'? true : false} onClick={onClick}/>
      <span className="slider"></span>
    </label>
  )
}

export default SwitchBtn