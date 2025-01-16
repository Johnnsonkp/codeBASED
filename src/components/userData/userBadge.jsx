import React, {useState} from 'react'

import UserBadgeDropDown from './UserBadgeDropDown';
import { userLogout } from '../api/userService';

function UserBadge({userInfo, theme, setSignOutInitiated}) {
  const [showDropDown, setShowDropDown] = useState(false);
  
  const initiatUserSignOut = async () => {
      console.log("handle logout")
      userLogout()
        .then((data) => {
          if (data && data.status && data.status != 200){
            console.log("data err", data);
          } 
          else{
            setSignOutInitiated(true)
          }
        })
  };


  return (
    <>
    <div 
      onClick={() => setShowDropDown(!showDropDown)} 
      style={{
        display: 'flex',
        cursor: 'pointer',
        backgroundColor: 'inherit',
      }}
    >
      <img 
        style={{
          width: '35px', 
          height: '35px', 
          border: '1px solid gray', 
          borderRadius: '50px',
          marginRight: '10px'
        }} 
        src={userInfo && userInfo.avatar_url} 
      />
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start'
        }}>
        <p style={{fontWeight: 'bold', margin: '0px', fontSize: '13px'}}>
          {userInfo && userInfo.name}
        </p>
        <p style={{margin: '0px', fontSize: '12px'}}>
          @{userInfo && userInfo.login}
        </p>
      </div>
    </div>
    
    <UserBadgeDropDown 
      toggle={showDropDown}
      theme={theme}
      initiatUserSignOut={initiatUserSignOut}
    />
    </>
  )
}

export default UserBadge