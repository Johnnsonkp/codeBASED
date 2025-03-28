import React, { useContext, useEffect } from 'react';
import { fetchUserInfo, handleLoginWithCode } from '../../api/userService.js';
import { storeUserData, userLoginError } from '../../store/actions/userActions';

import AuthTemplatePage from './AuthTemplatePage.jsx';
import { UserContext } from '../../store/context/UserContext';
import { useNavigate } from 'react-router';

export default function Auth() {
  const GITHUB_CLIENT_ID = import.meta.env.VITE_APP_GITHUB_CLIENT_ID;
  const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;
  
  const {userState, userDispatch} = useContext(UserContext)
  const isUserAuth = userState.authorised
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code');
  const navigate = useNavigate()

  const loginWithGitHub = () => {
    window.location.href = encodeURI(githubOAuthURL);
  };

  const handleData = (data) => {
    if (data){
      storeUserData(data, userDispatch)
      navigate('/dashboard');
      return;
    }
    userLoginError(userDispatch, data.status)
  }
  
  const handleLoadDemoUserData = async () => {
    try {
      const data = await fetchUserInfo();
      handleData(data);
    } catch (error) {
      console.error("An error occurred while loading demo user data:", error);
      userLoginError(userDispatch, "An error occurred while loading user data ")
      navigate('/');
      return;
    }
  };

  const handleLogin = async (code) => {
    const data = await handleLoginWithCode(code);
    handleData(data);
  }
  
  useEffect(() => {
    if (code && isUserAuth == false) {
      handleLogin(code);
    }
  }, [code])

  return (
    <AuthTemplatePage 
      githubAuth={loginWithGitHub}
      loadDemoUser={handleLoadDemoUserData}
    />
  );
};
