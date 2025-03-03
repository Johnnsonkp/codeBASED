import './tabs.css'

import React, { useState } from 'react'

import LanguageNav from '../Languages/LanguageNav';
import { useTheme } from '../theme-provider';

function TabSlide({tabs, language, setTabsContainer, tabsContainer, showSelectedLangOnly}) {
  const [activeTab, setActiveTab] = useState()
  const theme = useTheme();
  
  // if(activeTab == null){
  //   setTabsContainer(tabs[0]);
  // }

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
        minWidth: '440px', 
        width: '100%'
      }}
    >
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div 
        style={{border: `2px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`}}
        className="tab-container">
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