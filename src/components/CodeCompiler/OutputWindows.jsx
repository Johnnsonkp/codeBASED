import CompileBtn from '../CustomButtons/CompileBtn'
import OutputDetails from '../outputWindow/OutputDetails'
import OutputWindow from '../outputWindow/OutputWindow'
import React from 'react'
import { useTheme } from '../theme-provider'

function OutputWindows({handleCompile, userInput, outputDetails, processing, solutionOutputDetails, handleSolutionCompile, count, solutionProcessing}) {
  const { theme } = useTheme();

  return (
    <div 
      style={{
        border: `1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
        borderRadius: '5px', 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'left', 
        flex: '0.1', 
        marginLeft: '15px', 
        minHeight: '520px', 
        padding: '10px', 
        // marginTop: '13px'
      }}
    >
        <div 
          style={{
            display: "flex", 
            flexShrink: 0, 
            flexDirection: 'column'
          }}
        >
          <OutputWindow outputDetails={outputDetails} title={"User Output"}/>
          <CompileBtn 
            onClick={() => handleCompile(userInput)} 
            handleCompile={handleCompile} 
            userInput={userInput} 
            processing={processing}
          />
        </div>
        <div 
          style={{border: '0.1px solid #606266', background: 'lightGray', marginTop: '25px', marginBottom: '10px'}}
        >
        </div>
        <div style={{display: "flex", flexShrink: 0, flexDirection: 'column'}}>
          <OutputWindow outputDetails={solutionOutputDetails} title={"Solution Output"}/>
          <CompileBtn 
            onClick={() => handleSolutionCompile(count)} 
            handleCompile={handleCompile} 
            userInput={count} 
            processing={solutionProcessing}
          />
        </div>
        
        <div style={{marginTop: '20px'}}>
          {outputDetails && <OutputDetails outputDetails={outputDetails} title={"User output"} />}
          {solutionOutputDetails && <OutputDetails outputDetails={solutionOutputDetails} title={"Solution output"}/>}
        </div>
    </div>
  )
}

export default OutputWindows