import React, {useState} from 'react'

function DemoButton({onClick}) {
  const [toggle, setToggle] = useState(false)

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

  const handleClick = () => {
    setToggle(true)

    setTimeout(onClick, 1000)
  }

  return (
    <button 
      onClick={handleClick}
      type="button" 
      style={buttonStyle}
    >
      {
        toggle? <svg width="20" height="20" fill="currentColor" className="fa-spin mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
        </path>
      </svg> : "Demo"
      }
    </button>
  )
}

export default DemoButton