import React, {useState} from 'react';

import AuthTemplatePage from './AuthTemplatePage';
import DemoButton from './DemoButton';
import GithubButton from './GithubButton';
import axios from "axios";
import { handleLogin } from '../api/userService';

const GITHUB_CLIENT_ID = import.meta.env.VITE_APP_GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = import.meta.env.VITE_APP_GITHUB_SECRET_KEY;
const GITHUB_CALLBACK_URL = 'http://localhost:5173';
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

const GitHubOAuth = ({setAuthorized}) => {
  const [fecthData, setFetchData] = useState(null)

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

    // handleLogin()
    //   .then(data => setFetchData(data))
  }, []);

  return (
    <AuthTemplatePage 
      GithubButton={<GithubButton onClick={() => setAuthorized(true)}/>}
      DemoButton={<DemoButton onClick={() => setAuthorized(true)}/>}
    />
  );
};

export default GitHubOAuth;