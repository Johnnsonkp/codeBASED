import React from 'react'

function UserBadge({userInfo}) {
  return (
    <>
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
      <p style={{fontWeight: 'bold', margin: '0px', fontSize: '14px'}}>
        {userInfo && userInfo.name}
      </p>
      <p style={{margin: '0px', fontSize: '14px'}}>
        {userInfo && userInfo.login}
      </p>
    </div>
    </>
  )
}

export default UserBadge