import React from 'react'

function DemoButton({onClick}) {
  const buttonStyle = {
    paddingTop: "0.5rem", 
    paddingBottom: "0.5rem",
    paddingLeft: "1rem", 
    paddingRight: "1rem",
    maxWidth: "28rem",
    display: "flex", 
    justifyContent: "center", // justify-center
    alignItems: "center", // items-center
    backgroundColor: "#4B5563", // bg-gray-600
    color: "white", // text-white
    width: "100%", // w-full
    textAlign: "center", // text-center
    fontSize: "1rem", // text-base
    fontWeight: "600", // font-semibold
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
    borderRadius: "0.5rem", 
    transition: "background-color 200ms ease-in, box-shadow 200ms ease-in",
    outline: "none", 
  };
  
  const hoverStyle = {
    backgroundColor: "#374151", //
  };
  
  const focusStyle = {
    boxShadow: "0 0 0 4px rgba(107, 114, 128, 0.5), 0 0 0 2px rgba(229, 231, 235, 0.5)", 
  };
  return (
    <button 
      onClick={onClick}
      type="button" 
      style={buttonStyle}
      onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
      onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
      onBlur={(e) => Object.assign(e.target.style, buttonStyle)}
    >
      Demo
    </button>
  )
}

export default DemoButton