import React, {useState} from 'react';

import AuthTemplatePage from './AuthTemplatePage';
import DemoButton from './DemoButton';
import GithubButton from './GithubButton';
import axios from "axios";

const GITHUB_CLIENT_ID = import.meta.env.VITE_APP_GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = import.meta.env.VITE_APP_GITHUB_SECRET_KEY;
const GITHUB_CALLBACK_URL = 'http://localhost:5173';
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

const GitHubOAuth = ({setAuthorized}) => {
  const [fecthData, setFetchData] = useState(null)
  
  const handleLogin = async (code) => {
    const response = await fetch('http://localhost:3001/api/auth/github', {
      method: 'GET',
      // mode: 'cors',
      headers: { 
        'Content-Type': 'application/json',
        "Accept": "application/vnd.github+json"
      },
    })
    const codeChallenge = await response.json();
    return codeChallenge;    
  };

  const handleGitHubCallback = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    
    if (code) {
      handleLogin(code);
    }
  };

  React.useEffect(() => {
    // handleGitHubCallback();

    handleLogin()
      .then(data => setFetchData(data))
  }, []);

  return (
    // <div>
    //   <a href={githubOAuthURL}>Sign in with GitHub</a>
    //   <button onClick={() => handleLogin()}>User Auth</button>
    //   <GithubButton />
    // </div>

    <AuthTemplatePage 
      GithubButton={<GithubButton onClick={() => setAuthorized(true)}/>}
      DemoButton={<DemoButton onClick={() => setAuthorized(true)}/>}
    />
  );
};

export default GitHubOAuth;