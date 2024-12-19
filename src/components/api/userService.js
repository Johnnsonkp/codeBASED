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
  const response = await fetch(`${serverURL}/api/auth/github`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      "Accept": "application/vnd.github+json",
      "Access-Control-Allow-Origin": "*",
    },
  })
  const codeChallenge = await response.json();
  return codeChallenge;    
};