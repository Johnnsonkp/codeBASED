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

const GitHubOAuth = ({setAuthorized, setUserInformation, setStatus}) => {

  const loginWithGitHub = () => {
    const url = githubOAuthURL;
    const encodedURL = encodeURI(url);    
    window.location.href = encodedURL;
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

  const handleLoadDemoUserData = async () => {
    try {
      const data = await fetchUserInfo();
  
      if (data && data.status && data.status != 200) {
        console.log("Data error:", data);
        setUserInformation(null);
      } else {
        setUserInformation(data);
        setAuthorized(true);
      }
    } catch (error) {
      console.error("An error occurred while loading demo user data:", error);
      setStatus({
        status: "error",
        message: "An error occurred while loading demo user data"
      })
      setUserInformation(null); // Optionally set to null in case of an error
    }
  };
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code');
  
  useEffect(() => {
    if (code) {
      handleLogin(code);    
    }
  }, [code])

  return (
    <AuthTemplatePage 
      GithubButton={<GithubButton onClick={() => loginWithGitHub()}/>}
      DemoButton={<DemoButton onClick={() => handleLoadDemoUserData()}/>}
    />
  );
};

export default GitHubOAuth;