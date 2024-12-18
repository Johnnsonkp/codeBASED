import React from 'react'

function UserBadge({userInfo}) {
  return (
    <div style={{display: 'flex'}}>
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
  )
}

export default UserBadge