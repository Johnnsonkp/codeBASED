// const serverURL = import.meta.env.VITE_APP_PROD_SERVER_URL || import.meta.env.VITE_APP_DEV_SERVER_URL

const serverURL = import.meta.env.VITE_APP_PROD_SERVER_URL 

export async function fetchUserInfo() {
  const response = await fetch(`${serverURL}/api/user_info`, {
    method: 'GET',
    mode: 'cors',
    headers: { 
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*" 
    },
  });
  return response.json();
}

export const handleLogin = async (code) => {
  console.log(`handle login: ${serverURL}/api/auth/github`)
  
  const response = await fetch(`${serverURL}/api/auth/github`, {
    method: 'GET',
    mode: 'cors',
    headers: { 
      'Content-Type': 'application/json',
      "Accept": "application/vnd.github+json",
      "Access-Control-Allow-Origin": "*",
    },
  })
  const codeChallenge = await response.json();
  // console.log("handleLogin response", codeChallenge);
  return codeChallenge;    
};

export const userLogout = async () => {
  const response = await fetch(`${serverURL}/api/logout`, {
    method: 'GET',
    mode: 'cors',
    headers: { 
      'Content-Type': 'application/json',
      // "Accept": "application/vnd.github+json",
      "Access-Control-Allow-Origin": "*",
    },
  })
  return response;
  // const codeChallenge = await response.json();
  // console.log("handleLogin response", codeChallenge);
  // return codeChallenge; 
}