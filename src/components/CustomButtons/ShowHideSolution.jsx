import React from 'react'

function ShowHideSolution({blur, setBlur}) {
  return (
    <button 
      onClick={() => setBlur(!blur)} 
      style={{position: 'absolute', top: '15px', left: '82%', fontSize: '9px', padding: "6px", borderRadius: '12px', 
        backgroundColor: "rgba(255, 255, 255, 0.1)", border: '1px solid lightGray', color: '#fff'}}
    >
      { blur? "Show Solution" : "Hide Solution"}
    </button>
  )
}

export default ShowHideSolution