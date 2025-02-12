const serverURL = import.meta.env.VITE_APP_PROD_SERVER_URL || import.meta.env.VITE_APP_DEV_SERVER_URL

export async function getSelectedCodeChallenge(codingChallengeName, selected, dirUpdate) {
  const response = await fetch(
    `${serverURL}/api/repos/challenge?` +
      new URLSearchParams({
        selectedChallenge: selected !== null? codingChallengeName : `/${codingChallengeName}/`,
        selected_Repo: selected !== null? `/${selected}/` : '',
        directory: dirUpdate
      })
  );
  console.log("serverURL", serverURL);
  const codeChallenge = await response.text();
  return codeChallenge; 
}

export async function getSelectedRepo(repo, dirUpdate) {
  const response = await fetch(
    `${serverURL}/api/repos?` +
      new URLSearchParams({ selectedRepo: repo, directory: dirUpdate })
  );
  console.log("serverURL", serverURL);
  return response.json();
}

export async function fetchDefaultRepos(defaultRepo) {

  const response = await fetch(
    `${serverURL}/api/repos/default?` +
      new URLSearchParams({ default_repo: defaultRepo })
  );
  return response.json();
}

export async function fetchAllRepos() {
  const response = await fetch(`${serverURL}/api/repos/all`, {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(`serverURL, ${serverURL}/api/repos/all`);
  return response.json();
}

export const getAllRepos = async (userInformation) => {
  
  const response = await fetch(`${serverURL}/api/repos/all`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      "Accept": "application/vnd.github+json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ 
      id: userInformation.id,
      login: userInformation.login,
      name: userInformation.name
    }),
  })
  const codeChallenge = await response.json();
  return codeChallenge;    
};

export async function getSelectedRepoOnDropDown(repo, login) {

  const response = await fetch(
    `${serverURL}/api/repos/selected_dir?` +
      new URLSearchParams({ selected_dir: repo, user_name: login })
  );
  return response.json();
}