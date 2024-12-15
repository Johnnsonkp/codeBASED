import './tabs.css'

import React, {useEffect, useState} from 'react'

function TabSlide({tabs, contents, language, setTabsContainer, tabsContainer}) {
  // const [tabsContainer, setTabsContainer] = useState(tabs[0])
  const [activeTab, setActiveTab] = useState()
  let dateKey = Date.now();
  
  if(activeTab == null){
    setTabsContainer(tabs[0]);
  }

  function handleActiveTabSelect(tab){
    // alert("tab", tab);
    if(tab == tabs[0] || tabs[1]){
      setActiveTab(tab)
      setTabsContainer(tab);
    }
  }

  return (
    <div 
      style={{
        display: 'flex !important', 
        // height: '86vh', 
        maxHeight: '700px', 
        minWidth: '440px', 
        width: '50%'
      }}
    >
    <div style={{display: 'flex'}}>
      <div className="tab-container">
        {/* {tabs && tabs[0].map((tab, index) => ( */}
        {tabs && tabs.map((tab, index) => (
            <button
              style={{fontSize: '11px'}} 
              // onClick={() => setTabsContainer(tab)}
              onClick={() => handleActiveTabSelect(tab)}
              key={index} 
              className={`tab-button ${tabsContainer == tabs[index]? 'active' : ''}`} 
            >
              {tab}
            </button>
        ))}
      </div>
      
      {language && language[0].value?
        <button style={{fontSize: '14px', padding: '7px', minWidth: '80px'}}>
          {language && language[0].value}
        </button> : ''
      }
    </div>

      {/* <div key={dateKey} className="tab-content" >
        {contents && contents.map((content, index) => {
        return <>
          <div 
            key={index} 
            className={`tab-panel ${tabsContainer == tabs[index]? 'activePanel' : ''} `}
          >
            {content}
          </div>
        </>
      })}
      </div> */}
    </div>
  )
}
export default TabSlide