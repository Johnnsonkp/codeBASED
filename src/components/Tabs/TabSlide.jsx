import './tabs.css'

import React, { useState } from 'react'

import LanguageNav from '../Languages/LanguageNav';
import { useTheme } from '../theme-provider';

function TabSlide({tabs, language, setTabsContainer, tabsContainer, showSelectedLangOnly}) {
  const [activeTab, setActiveTab] = useState()
  const theme = useTheme();
  
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

  const tabStyle = {
    borderLeft: `1px solid ${theme.theme == 'light'? '#D3D3D3' : '#3C3C3C'}`,
    borderRight: `1px solid ${theme.theme == 'light'? '#D3D3D3' : '#3C3C3C'}`,
    fontSize: '11px'
  }

  return (
    <div 
      style={{
        display: 'flex !important', 
        maxHeight: '700px', 
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          borderLeft: `2px solid ${theme.theme == 'light'? '#D3D3D3' : '#3C3C3C'}`,
          borderRight: `2px solid ${theme.theme == 'light'? '#D3D3D3' : '#3C3C3C'}`,
        }}
        className="tab-container"
      >
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
    </div>
  )
}
export default TabSlide
