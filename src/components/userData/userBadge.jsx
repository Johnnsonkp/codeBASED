import React, {useContext, useState} from 'react'

import UserBadgeDropDown from './UserBadgeDropDown';
import { UserContext } from '../../store/context/UserContext';
import { userLogout } from '../../api/userService';

function UserBadge({userInfo, theme}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const {userState, userDispatch} = useContext(UserContext)
  
  const userSignout = async () => {
    let type = ''
    userLogout()
      .then((data) => {
        if (data && data.status && data.status != 200){
          userDispatch({type: "UNKNOWN_ERROR", payload: data})
        }
        else{
          userDispatch({type: "SIGN_OUT"})
          window.location.href = '/'
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
      initiatUserSignOut={userSignout}
    />
    </>
  )
}

export default UserBadge