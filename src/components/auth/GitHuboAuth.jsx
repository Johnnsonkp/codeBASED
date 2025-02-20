import React, { useContext, useEffect } from 'react';
import { fetchUserInfo, handleLoginWithCode } from '../../api/userService';
import { storeUserData, userLoginError } from '../../store/actions/userActions.jsx';

import AuthTemplatePage from './AuthTemplatePage';
import { UserContext } from '../../store/context/UserContext.jsx';
import { getCodeFromURL } from '../../helpers/auth/GithubAuth.js';
import { useNavigate } from 'react-router';

const GITHUB_CLIENT_ID = import.meta.env.VITE_APP_GITHUB_CLIENT_ID;
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;


const GithubOAuth = () => {
  
  const {userState, userDispatch} = useContext(UserContext)
  const isUserAuth = userState.authorised
  const code = getCodeFromURL();
  const navigate = useNavigate()
  
  const loginWithGitHub = () => {
    window.location.href = encodeURI(githubOAuthURL);
  };

  const handleData = (data) => {
    if (data && data?.status && data.status !== 200) {
      userLoginError(userDispatch, data.status)
    } else if (data && isUserAuth == false){
      storeUserData(data, userDispatch)
    }
  }
  
  const handleLoadDemoUserData = async () => {
    try {
      const data = await fetchUserInfo();
      handleData(data);
    } catch (error) {
      console.error("An error occurred while loading demo user data:", error);
      userLoginError(userDispatch, "An error occurred while loading user data")
      navigate('/');
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

export default GithubOAuth;