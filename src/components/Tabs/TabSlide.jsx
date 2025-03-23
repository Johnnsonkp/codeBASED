import './tabs.css'

import React, { useState } from 'react'

import { useTheme } from '../theme-provider';

function TabSlide({tabs, language, setTabsContainer, tabsContainer}) {
  const [activeTab, setActiveTab] = useState()
  const {theme, setTheme} = useTheme();
  
  function handleActiveTabSelect(tab){
    if(tab == tabs[0]){
      setActiveTab(tab[1])
      setTabsContainer(tab);
    }
    if(tab == tabs[1]){
      setActiveTab(tab[0])
      setTabsContainer(tab);
    }
  }
  return (
    <div 
      style={{
        display: 'flex !important', 
        maxHeight: '700px', 
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
        background: `${theme == "light"? "#F4F4F4" : '#242424'}`
      }}
    >
      <div className="tab-container">
        {tabs && tabs.map((tab, index) => (
          <button
            style={{
              fontSize: '11px',
              background: `${tabsContainer == tabs[index]? theme == "light"? '#fff' : '#282C34' : "transparent"}`,
              color: `${theme == "light"? "#333" : '#fff'}`
            }} 
            onClick={() => handleActiveTabSelect(tab)}
            key={index} 
            className={`tab-button ${tabsContainer == tabs[index]? 'active' : ''}`} 
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
export default TabSlide
