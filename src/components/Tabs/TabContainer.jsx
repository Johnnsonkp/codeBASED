import React from 'react'

function TabContainer({tabsList}) {
  return (
    <div class="tab-container">{tabsList || "default"} <div class="tab-slider"></div>
    </div>
  )
}

export default TabContainer