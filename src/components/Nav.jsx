import React, { useEffect, useState } from 'react'

import SwitchBtn from './CustomButtons/SwitchBtn';
import TopBanner from './TopBanner';
import UnknownUser from './userData/UnknownUser';
import UserBadge from './userData/userBadge';
import { useTheme } from './theme-provider'

function Nav({userInfo, setUserRepos, setDirectories, dummyTopicTitles, compare, dummyCode, count}) {
  const { theme, setTheme } = useTheme();
  const userPresence = userInfo && userInfo? true : false;
  const [signOutInitiated, setSignOutInitiated] = useState(false)

  const handleLogout = async (code) => { 
    console.log("handleLogout")
    setUserRepos(null);
    setDirectories(dummyTopicTitles); 
    setSignOutInitiated(false) 
    window.location.href = '/'
  };

  useEffect(() => {
    if (signOutInitiated){
      handleLogout()
    }
  }, [signOutInitiated])
  
  return (
    <>
    <TopBanner compare={compare} dummyCode={dummyCode} count={count}/>
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
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          <SwitchBtn 
            theme={theme} 
            onClick={() => theme == "dark"? setTheme("light") : setTheme("dark")}
          />
          <div 
            style={{
              border: '1px solid silver', 
              background: 'silver', 
              height: '100%', 
              marginLeft: '10px', 
              marginRight: '10px'
            }}
          >
            <hr></hr>
          </div>
          {userPresence?  
            <UserBadge 
              setSignOutInitiated={setSignOutInitiated}
              theme={theme} 
              userInfo={userInfo}
            /> : <UnknownUser />
          }
        </div>
    </div>
    </>
  )
}

export default Nav