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
  //   fetch(`${serverURL}/auth/github/callback`, {
  //   method: 'POST',
  //   mode: 'cors',
  //   headers: { 
  //     'Content-Type': 'application/json',
  //     "Access-Control-Allow-Origin": "*", 
  //   },
  //   body: JSON.stringify({ code }),
  // })
  // .then(response => {
  //   console.log("response", response)
  //   return response
  // })
  // .then(data => {
  //   return data;
  // });
  // .then(data => {
  //     return data;
  // });


  const response = await fetch(`${serverURL}/auth/github/callback`, {
    method: 'POST',
    mode: 'cors',
    headers: { 
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ code }),
  })
  // .then(response => {
  //   console.log("response", response.json())
  //   return response.json()
  // })
  console.log("response", response)
  return response.json()
};