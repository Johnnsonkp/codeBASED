import React from 'react'
import { useTheme } from '../theme-provider';

function SidePanelContainer({children, className}) {
  const theme = useTheme();
  
  return (
    <div 
      className={className}
      style={{
        border: `0.1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
        width: '180px', 
        overflow: 'auto', 
        padding: '5px', 
        paddingTop: '0px', 
        borderRadius: '5px', 
        maxHeight: '785px',
        minHeight: '330px',
      }}
    >
    {children}
    </div>
  )
}

export default SidePanelContainer