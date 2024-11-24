export async function fetchUserInfo() {
  const response = await fetch('http://localhost:3001/api/user_info', {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}
