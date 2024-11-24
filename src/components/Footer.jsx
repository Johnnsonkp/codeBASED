import '../App.css'

import React from 'react'

function Footer({userInput, setCompare, AIChecker, compareOutputs, score, sideNavTitles, nextChallenge}) {
  return (
    <div 
        style={{
          width: "100%", 
          position: 'fixed', 
          bottom: '0px', 
          left: '0px',
        }}>
          <div 
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)", 
              padding: "5px 30px", 
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", 
              backdropFilter: "blur(10px)",
              justifyContent: 'space-between',
              display: 'flex'
            }}
          >
              <div style={{width: '40%', textAlign: 'left'}}>
                <button onClick={() => setCompare(userInput)}>Score: {score}</button>
              </div>
              <div style={{textAlign: 'right', width: '28%', display: 'flex', justifyContent: 'space-evenly'}}>
                <button onClick={() => setCompare(userInput)}>Strict Check</button>
                <button onClick={() => compareOutputs()}>Check Output</button>
                <button onClick={() => nextChallenge()}>Next -> </button>
              </div>
          </div>
      </div>
  )
}

export default Footer