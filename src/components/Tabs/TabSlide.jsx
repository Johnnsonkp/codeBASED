import './tabs.css'

import React, { useState } from 'react'

import LanguageNav from '../Languages/LanguageNav';

function TabSlide({tabs, language, setTabsContainer, tabsContainer, showSelectedLangOnly}) {
  const [activeTab, setActiveTab] = useState()
  
  if(activeTab == null){
    setTabsContainer(tabs[0]);
  }

  function handleActiveTabSelect(tab){
    if(tab == tabs[0] || tab == tabs[1]){
      setActiveTab(tab)
      setTabsContainer(tab);
    }
  }

  return (
    <div 
      style={{
        display: 'flex !important', 
        maxHeight: '700px', 
        minWidth: '440px', 
        width: '50%'
      }}
    >
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div className="tab-container">
        {tabs && tabs.map((tab, index) => (
            <button
              style={{fontSize: '11px'}} 
              onClick={() => handleActiveTabSelect(tab)}
              key={index} 
              className={`tab-button ${tabsContainer == tabs[index]? 'active' : ''}`} 
            >
              {tab}
            </button>
        ))}
      </div>
      
        <LanguageNav 
          language={language}
          showSelectedLangOnly={showSelectedLangOnly} 
        />
    </div>
    </div>
  )
}
export default TabSlide