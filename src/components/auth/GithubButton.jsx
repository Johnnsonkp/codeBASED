import React from 'react'
import githubIcon from './githubIcon.svg'

function GithubButton({onClick}) {
  const buttonStyle = {
    paddingTop: "0.5rem", // py-2
    paddingBottom: "0.5rem", // py-2
    paddingLeft: "1rem", // px-4
    paddingRight: "1rem", // px-4
    maxWidth: "28rem", // max-w-md
    display: "flex", // flex
    justifyContent: "center", // justify-center
    alignItems: "center", // items-center
    backgroundColor: "#4B5563", // bg-gray-600
    color: "white", // text-white
    width: "100%", // w-full
    textAlign: "center", // text-center
    fontSize: "1rem", // text-base
    fontWeight: "600", // font-semibold
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
    borderRadius: "0.5rem", // rounded-lg
    transition: "background-color 200ms ease-in, box-shadow 200ms ease-in",
    outline: "none", // focus:outline-none
  };
  
  const hoverStyle = {
    backgroundColor: "#374151", //
  };
  
  const focusStyle = {
    boxShadow: "0 0 0 4px rgba(107, 114, 128, 0.5), 0 0 0 2px rgba(229, 231, 235, 0.5)", 
  };
  
  const serverURL = import.meta.env.VITE_APP_PROD_SERVER_URL 
  const GITHUB_CLIENT_ID = import.meta.env.VITE_APP_GITHUB_CLIENT_ID;
  const GITHUB_CLIENT_SECRET = import.meta.env.VITE_APP_GITHUB_SECRET_KEY;
  const GITHUB_CALLBACK_URL = import.meta.env.VITE_APP_CLIENT_CALLBACK_URL
  const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;
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
      <img src={githubIcon} style={{marginRight: '5px', color: '#fff'}}/>
      Sign in with GitHub
    </button>
  )
}

export default GithubButton