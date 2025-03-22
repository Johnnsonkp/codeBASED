import React from 'react'
import { useTheme } from '../theme-provider';

function SidePanelContainer({children, className}) {
  const theme = useTheme();
  
  return (
    <div 
      className={className}
      style={{
        border: `0.1px solid ${theme == 'light'? '#D3D3D3' : '#3C3C3C'}`,
        overflow: 'auto', 
        padding: '5px', 
        paddingTop: '0px', 
        borderRadius: '5px', 
        height: '100vh'
      }}
    >
    {children}
    </div>
  )
}

export default SidePanelContainer