import React from 'react'
import SwitchBtn from './CustomButtons/SwitchBtn';
import UserBadge from './userData/userBadge';
import { useTheme } from './theme-provider'

function Nav({userInfo}) {
  const { theme, setTheme } = useTheme();

  const handleLogout = async (code) => {
    const response = await fetch('http://localhost:3001/logout', {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    })
    const codeChallenge = await response;
    console.log("logout", response)
    return codeChallenge;    
  };
  
  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}
    >
      <a href="/">
        <h2>[-] CodeBASED</h2>
      </a>
        <div 
          style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between'
          }}
        >
          <SwitchBtn theme={theme} onClick={() => theme == "dark"? setTheme("light") : setTheme("dark")}/>
          <div 
            style={{border: '1px solid silver', background: 'silver', height: '100%', marginLeft: '10px', marginRight: '10px'}}
          >
            <hr></hr>
          </div>

          {/* <button onClick={() => handleLogout()}>Logout</button> */}
          
          <UserBadge userInfo={userInfo}/>
        </div>
    </div>
  )
}

export default Nav