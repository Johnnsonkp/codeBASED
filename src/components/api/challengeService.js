export async function getSelectedCodeChallenge(codingChallengeName, selected) {
  const response = await fetch(
    'http://localhost:3001/api/repos/challenge?' +
      new URLSearchParams({
        selectedChallenge: codingChallengeName,
        selectedRepo: selected,
      })
  );
  const codeChallenge = await response.text();
  return codeChallenge; 
}

export async function getSelectedRepo(repo) {
  const response = await fetch(
    'http://localhost:3001/api/repos?' +
      new URLSearchParams({ selectedRepo: repo })
  );
  return response.json();
}

export async function fetchAllRepos() {
  const response = await fetch('http://localhost:3001/api/repos/all', {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}