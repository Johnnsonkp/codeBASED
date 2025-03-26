import React, {useState} from 'react'

import LoadSpinner from './LoadSpinner';
import githubIcon from './githubIcon.svg'

function GithubButton({onClick}) {
  const [toggle, setToggle] = useState(false)

  const hoverStyle = {
    backgroundColor: "#374151",
  };
  
  const focusStyle = {
    boxShadow: "0 0 0 4px rgba(107, 114, 128, 0.5), 0 0 0 2px rgba(229, 231, 235, 0.5)", 
  };
  
  const buttonStyle = {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    maxWidth: "28rem",
    minWidth: '13rem',
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
    outline: "none"
  };
  
  const handleClick = () => {
    setToggle(true)
    setTimeout(onClick, 1000)
  }
  
  return (
    <button
      type="button"
      onClick={handleClick}
      style={buttonStyle}
      onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
      onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
      onBlur={(e) => Object.assign(e.target.style, buttonStyle)}
    >
      {toggle? <LoadSpinner /> : 
        <>
        <img src={githubIcon} style={{marginRight: '5px', color: '#fff'}}/>
        Sign in with GitHub
        </>
      }
    </button>
  )
}

export default GithubButton