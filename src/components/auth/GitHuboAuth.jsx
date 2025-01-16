import React, {useEffect, useState} from 'react';

import AuthTemplatePage from './AuthTemplatePage';
import DemoButton from './DemoButton';
import GithubButton from './GithubButton';
import { fetchUserInfo } from '../api/userService';

const GITHUB_CLIENT_ID = import.meta.env.VITE_APP_GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = import.meta.env.VITE_APP_GITHUB_SECRET_KEY;
const GITHUB_CALLBACK_URL = import.meta.env.VITE_APP_CLIENT_CALLBACK_URL;
const server_URL = import.meta.env.VITE_APP_PROD_SERVER_URL;
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

const GitHubOAuth = ({setAuthorized, setUserInformation}) => {
  const loginWithGitHub = () => {
    const clientID = GITHUB_CLIENT_ID;
    const redirectURI = GITHUB_CALLBACK_URL;
    window.location.href = `https://github.com/login/oauth/authorize?response_type=code&redirect_uri=${redirectURI}&scope=user:email&client_id=${clientID}`
  };
  
  const handleLogin = async (code) => {
    fetch(`${server_URL}/auth/github/callback`, {
      method: 'POST',
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", 
      },
      body: JSON.stringify({ code }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("data client", data)
        setUserInformation(data)
        setAuthorized(true)
    });
  };

  const handleGitHubCallback = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    
    if (code) {
      handleLogin(code);    
    }
  };

  const handleLoadDemoUserData = () => {
    fetchUserInfo()
      .then(data => {
        if (data && data.status && data.status != 200){
          console.log("data err", data);
          setUserInformation(null);
        } 
        else{
          setUserInformation(data)
          setAuthorized(true)
        }
      });
  }

  useEffect(() => {
    handleGitHubCallback()
  }, [])

  return (
    <AuthTemplatePage 
      GithubButton={<GithubButton onClick={() => loginWithGitHub()}/>}
      DemoButton={<DemoButton onClick={() => handleLoadDemoUserData()}/>}
    />
  );
};

export default GitHubOAuth;