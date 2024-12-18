import React from 'react'

function SidePanelContainer({children}) {
  return (
    <div 
      style={{
        border: "0.1px solid #606266",
        width: '180px', 
        overflow: 'scroll', 
        padding: '5px', 
        paddingTop: '0px', 
        borderRadius: '10px', 
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        maxHeight: '785px',
        minHeight: '785px',
      }}
    >
    {children}
    </div>
  )
}

export default SidePanelContainer