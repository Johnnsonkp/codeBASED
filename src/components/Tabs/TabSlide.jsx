import './tabs.css'

import React, {useEffect, useState} from 'react'

function TabSlide({tabs, contents, language}) {
  const [tabsContainer, setTabsContainer] = useState(tabs[0])
  let dateKey = Date.now();

  return (
  <div 
    style={{
      display: 'flex !important', 
      height: '86vh', 
      maxHeight: '700px', 
      minWidth: '440px', 
      width: '50%'
    }}
  >
    <div style={{display: 'flex'}}>
    <div className="tab-container">
      {tabs && tabs.map((tab, index) => (
        // <>
          <button
            style={{fontSize: '11px'}} 
            onClick={() => setTabsContainer(tab)}
            key={index} 
            className={`tab-button ${tabsContainer == tabs[index]? 'active' : ''}`} 
          >
            {tab}
          </button>
        // </>
    ))}
    
    </div>
      
    {language && language[0].value?
      <button style={{fontSize: '14px', padding: '7px', minWidth: '80px'}}>
        {language && language[0].value}
      </button> : ''}
    </div>

      <div key={dateKey} className="tab-content" >
        {contents && contents.map((content, index) => (
        <>
          <div key={index} className={`tab-panel ${tabsContainer == tabs[index]? 'activePanel' : ''} `}>
            {content}
          </div>
        </>
          ))}
      </div>
  </div>
  )
}
export default TabSlide