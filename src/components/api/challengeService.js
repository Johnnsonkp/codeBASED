const serverURL = import.meta.env.VITE_APP_PROD_SERVER_URL || import.meta.env.VITE_APP_DEV_SERVER_URL

export async function getSelectedCodeChallenge(codingChallengeName, selected) {
  const response = await fetch(
    `${serverURL}/api/repos/challenge?` +
      new URLSearchParams({
        selectedChallenge: codingChallengeName,
        selectedRepo: selected,
      })
  );
  console.log("serverURL", serverURL);
  const codeChallenge = await response.text();
  return codeChallenge; 
}

export async function getSelectedRepo(repo) {
  const response = await fetch(
    `${serverURL}/api/repos?` +
      new URLSearchParams({ selectedRepo: repo })
  );
  console.log("serverURL", serverURL);
  return response.json();
}

export async function fetchDefaultRepos() {
  const response = await fetch(`${serverURL}/api/repos/default`, {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log("serverURL", serverURL);
  return response.json();
}

export async function fetchAllRepos() {
  const response = await fetch(`${serverURL}/api/repos/all`, {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log("serverURL", serverURL);
  return response.json();
}