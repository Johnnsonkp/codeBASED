import React from 'react'

function UserBadgeDropDown({toggle, theme, initiatUserSignOut}) {
  return (
    <div style={{
      display: toggle? 'block' : 'none', 
      border: '1px solid gray', 
      height: '100px', 
      width: '150px', 
      position: 'absolute', 
      top: '50px', 
      right: '5px', 
      zIndex: '1000',
      borderRadius: '8px',
      textAlign: 'left',
      padding: '5px',
      backgroundColor: `${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
    }}
  >
    <ul style={{listStyle: 'none', padding: '0px', fontSize: '13px'}}>
      <li style={{border: '0.1px solid lightGray'}}>Repositories: 20</li>
      <li style={{border: '0.1px solid lightGray'}}>Score: 1</li>
    </ul>
    <button 
      onClick={() => initiatUserSignOut()}
      style={{fontSize: '13px', width: '100%', color: 'red', background: '#fff'}}>Logout</button>
  </div>
  )
}

export default UserBadgeDropDown