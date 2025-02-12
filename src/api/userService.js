const serverURL = import.meta.env.VITE_APP_PROD_SERVER_URL 

export async function fetchUserInfo() {
  console.log("url", serverURL)
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

export const handleLogin = async () => {
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
  return codeChallenge;    
};

export const userLogout = async () => {
  const response = await fetch(`${serverURL}/api/logout`, {
    method: 'GET',
    mode: 'cors',
    headers: { 
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
  })
  return response;
}

export const handleLoginWithCode = async (code) => {
    fetch(`${serverURL}/auth/github/callback`, {
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
      return data;
  });
};