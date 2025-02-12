import React, { useEffect } from 'react';
import { fetchUserInfo, handleLoginWithCode } from '../../api/userService';

import AuthTemplatePage from './AuthTemplatePage';
import DemoButton from './DemoButton';
import GithubButton from './GithubButton';

const GITHUB_CLIENT_ID = import.meta.env.VITE_APP_GITHUB_CLIENT_ID;
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

const GithubOAuth = ({setAuthorized, setUserInformation, setStatus}) => {
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code');
  
  const loginWithGitHub = () => {
    window.location.href = encodeURI(githubOAuthURL);
  };

  const handleData = (data) => {
    if (data && data?.status && data.status !== 200) {
      console.log("Data error:", data);
      setUserInformation(null);
    } else {
      setUserInformation(data);
      setAuthorized(true);
    }
  }
  
  const handleLoadDemoUserData = async () => {
    try {
      const data = await fetchUserInfo();
      handleData(data);
    } catch (error) {
      console.error("An error occurred while loading demo user data:", error);
      setStatus({
        status: "error",
        message: "An error occurred while loading demo user data"
      })
      setUserInformation(null);
    }
  };

  const handleLogin = async (code) => {
    const data = await handleLoginWithCode(code);
    console.log("data", data)
    handleData(data);
  }
  
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

export default GithubOAuth;