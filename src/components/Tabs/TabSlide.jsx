import './tabs.css'

import React, {useEffect, useState} from 'react'

function TabSlide({tabs, contents}) {
  const [tabsContainer, setTabsContainer] = useState(tabs[0])

  return (
    <div style={{display: 'flex !important', width: '29vw', height: '80vh', maxHeight: '700px'}}>
      <div className="tab-container">
        {tabs && tabs.map((tab, index) => (
          <>
            <button
              style={{fontSize: '11px'}} 
              onClick={() => setTabsContainer(tab)}
              key={index} 
              className={`tab-button ${tabsContainer == tabs[index]? 'active' : ''}`} 
            >{tab}
            </button>
          </>
        ))}
      </div>

      <div className="tab-content" >
        {contents && contents.map((content, index) => (
              <div key={index} className={`tab-panel ${tabsContainer == tabs[index]? 'activePanel' : ''} `}>{content}</div>
          ))}
      </div>
  </div>
  )
}
export default TabSlide