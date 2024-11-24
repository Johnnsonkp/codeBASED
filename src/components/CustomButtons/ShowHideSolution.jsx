import React from 'react'

function ShowHideSolution({blur, setBlur}) {
  return (
    <button 
      onClick={() => setBlur(!blur)} 
      style={{position: 'absolute', top: '5px', left: '74%', fontSize: '12px', padding: "6px", borderRadius: '12px', 
        backgroundColor: "rgba(255, 255, 255, 0.1)", color: '#f4f4f4'}}
    >
      { blur? "Show Solution" : "Hide Solution"}
    </button>
  )
}

export default ShowHideSolution