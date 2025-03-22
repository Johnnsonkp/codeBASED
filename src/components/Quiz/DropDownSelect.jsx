import "./dropDown.css"

import React from 'react'
import { useTheme } from "../theme-provider"

function DropDownSelect({categories, selectedCategory, getCategory}) {
  const {theme} = useTheme();
  
  const optionStyles = {
    margin: '5px', 
    padding: '5px', 
    border: '1px solid red',
    width: '500px', 
    height: '500px',
    fontSize: '11px',
    color: `${theme == 'light'? '#333' : '#fff'}`,
  }
  
  return (
    <select
      id={'select'}
      value={selectedCategory}
      onChange={(e) => getCategory(e.target.value)} 
    >
      {categories && categories.map((title, index) => (
        <option key={index} style={optionStyles}>
          {title}
        </option>
      ))}
    </select>
  )
}

export default DropDownSelect