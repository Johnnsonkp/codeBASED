import '../App.css'

import React from 'react'

function Footer({userInput, setCompare, AIChecker, compareOutputs, score, sideNavTitles, nextChallenge, setScore, outputDetails, solutionOutputDetails}) {
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
              <div style={{textAlign: 'right', width: '', display: 'flex', justifyContent: 'space-evenly'}}>
                <button style={{margin: '5px'}} onClick={() => setCompare(userInput)}>Strict Check</button>
                <button 
                  style={{margin: '5px'}} 
                  onClick={compareOutputs}
                >
                    Check Output
                </button>
                <button style={{margin: '5px'}} onClick={() => nextChallenge()}>Next </button>
              </div>
          </div>
      </div>
  )
}

export default Footer