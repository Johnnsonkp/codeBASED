import React from 'react'

function CompileBtn({handleCompile, userInput, processing, onClick}) {
  return (
    <button
      // onClick={handleCompile}
      onClick={onClick}
      disabled={!userInput}
      style={{
        marginTop: "0.5rem",
        border: "2px solid black",
        // zIndex: 10,
        borderRadius: "0.375rem",
        boxShadow: "5px 5px 0px 0px rgba(0, 0, 0, 1)",
        transition: "box-shadow 0.2s",
        flexShrink: 0,
        opacity: !userInput ? 0.5 : 1,
        fontSize: '12px',
        width: '100%'
      }}
    >
      {processing ? "Processing..." : "Compile and Execute"}
    </button>
  )
}

export default CompileBtn