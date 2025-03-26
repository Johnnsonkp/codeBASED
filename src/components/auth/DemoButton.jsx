import React, {useState} from 'react'

import LoadSpinner from './LoadSpinner';

function DemoButton({onClick}) {
  const [toggle, setToggle] = useState(false)

  const buttonStyle = {
    paddingTop: "0.5rem", 
    paddingBottom: "0.5rem",
    paddingLeft: "1rem", 
    paddingRight: "1rem",
    maxWidth: "28rem",
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4B5563",
    color: "white",
    width: "100%",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "600",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
    borderRadius: "0.5rem", 
    transition: "background-color 200ms ease-in, box-shadow 200ms ease-in",
    outline: "none", 
  };
  
  const handleClick = () => {
    setToggle(true)
    setTimeout(onClick, 1000)
  }

  return (
    <button 
      type="button"
      style={buttonStyle}
      onClick={handleClick} 
    >
      {toggle? <LoadSpinner /> : "Demo"}
    </button>
  )
}

export default DemoButton