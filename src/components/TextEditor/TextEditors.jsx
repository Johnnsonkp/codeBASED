import ShowHideSolution from '../CustomButtons/ShowHideSolution'
import TabSlide from '../Tabs/TabSlide';

function TextEditors({processingChecker2, processingChecker, blur, setBlur, setToggleLargeEditor, toggleLargeEditor, language}) {
  
  return (
    <div 
    style={{ 
      textAlign: 'left', 
      marginTop: '0px !important', 
      marginBottom: '100px',
      display: 'flex', 
      borderRadius: '5px', 
      maxHeight: '750px',
      minHeight: '750px',
    }}
  >
    
    <div style={{display: 'flex', minWidth: '910px', marginLeft: 'auto', marginRight: 'auto'}}>
      <TabSlide
        language={language} 
        tabs={["Code Challenge", "Code Explaination"]}
        contents={[
          <div
            key={1} 
            style={{
              position: 'relative', 
              border: `${processingChecker2? "2px solid orange" : ""}`, 
              width: `${processingChecker2? "101%" : ""}`
            }}
          > 
            <button 
              style={{position: 'absolute', top: '5px', left: '90%', fontSize: '12px', padding: "6px", borderRadius: '12px', 
                backgroundColor: "rgba(255, 255, 255, 0.1)", color: '#f4f4f4'}}
              onClick={() => setToggleLargeEditor(!toggleLargeEditor)}>[]</button>
          </div>,
          <div 
            key={12}
            style={{
              border: `${processingChecker2? "2px solid orange" : ""}`, 
              width: `${processingChecker2? "101%" : ""}`
            }}
          >
            <textarea 
              defaultValue={"## Explain your code in detail"} 
              style={{
                width: '99%', 
                height: '78vh', 
                maxHeight: '725px', 
              }}
            >
            </textarea>
          </div>
        ]}
      />
      <TabSlide 
        tabs={["Solution", "Solution Explained"]}
        contents={[
          <div 
            key={3}
            style={{ position: 'relative', border: `${processingChecker? "2px solid red" : ""}`, width: `${processingChecker? "101%" : ""}` }}>
            <ShowHideSolution blur={blur} setBlur={setBlur}/>
          </div>,
          <div 
            key={4}
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
        ]}
      />
      </div>
  </div>
  )
}

export default TextEditors