import React from 'react'
import SwitchBtn from './CustomButtons/SwitchBtn';
import UserBadge from './userData/userBadge';
import { useTheme } from './theme-provider'

function Nav({userInfo}) {
  const { theme, setTheme } = useTheme();
  
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
          
          <UserBadge userInfo={userInfo}/>
        </div>
    </div>
  )
}

export default Nav