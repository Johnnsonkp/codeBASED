import React from 'react'

export default function TextAreaComp({processingChecker2}) {
  return (
    <div 
      style={{
        border: `${processingChecker2? "2px solid orange" : ""}`, 
        width: `${processingChecker2? "101%" : ""}`
      }}
    >
      <textarea 
        defaultValue={"## Explain the solution code in detail"} 
        style={{
          width: '100%', 
          height: '78vh', 
          maxHeight: '725px'
        }}
      >
      </textarea>
    </div>
  )
}
