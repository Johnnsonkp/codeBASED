import { IntergrationIcon, SettingsIcon, UserIcon } from './DropDownIcons';

import React from 'react'

function DropDownMenu({toggle, theme, initiatUserSignOut, challengeState}) {
  
  const styles = {
    body: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      margin: 0,
      fontFamily: "Arial, sans-serif",
    },
    menuContainer: {
      width: "100%",
      maxWidth: "400px",
      backgroundColor: "white",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      padding: "5px 6px",
      fontSize: "12px",
      color: "#4b5563",
      textDecoration: "none",
      borderRadius: "6px",
      transition: "background-color 0.2s",
      cursor: "pointer",
    },
    menuItemHover: {
      backgroundColor: "#e5e7eb",
    },
    menuItemIcon: {
      width: "20px",
      height: "20px",
      marginRight: "12px",
    },
    container: {
      display: toggle? 'block' : 'none', 
      height: '100px', 
      width: '150px', 
      position: 'absolute', 
      top: '50px', 
      right: '34px', 
      zIndex: '1000',
      borderRadius: '8px',
      textAlign: 'left',
      padding: '5px',
    }
  };
  
  return (
    <div style={styles.container}>
      <nav style={styles.menuContainer}>
        <a href="#" style={styles.menuItem}>
            <UserIcon style={styles.menuItemIcon}/> User Details
        </a>
        <a href="#" className="menu-item" style={styles.menuItem}>
            <IntergrationIcon style={styles.menuItemIcon}/> Integrations
        </a>
        <a href="#" className="menu-item" style={styles.menuItem}>
            <SettingsIcon style={styles.menuItemIcon}/> Settings
        </a>

        <div style={{color: '#333', fontSize: '13px'}}>
          <p>User Score: {challengeState.score}</p>
        </div>
        <button 
          onClick={() => initiatUserSignOut()}
          style={{marginTop: "0px", fontSize: '13px', width: '100%', color: 'red', background: '#fff'}}>Logout
        </button>
      </nav>
    </div>
  )
}

export default DropDownMenu