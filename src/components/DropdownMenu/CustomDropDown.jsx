import React from 'react'
import { useTheme } from '../theme-provider';

function CustomDropDown({items, defaultSelect, func}) {
  const {theme} = useTheme();

  return (
    <select 
      id="repos" 
      name="repos" 
      style={{
        width: '250px', 
        padding: '5px', 
        marginRight: '5px', 
        borderRadius: '5px',
        backgroundColor: 'transparent', 
        border: "1px solid #3C3C3C",
        color: `${theme == 'light'? '#333' : '#fff'}`,
        fontSize: '12px',
        fontWeight: 'bold'
      }}
      onMouseLeave={(e) => func(e)}
    >
      {items && items.map((repo, index) => (
        <option 
          key={index}
          selected={repo == defaultSelect? true : false}
          value={repo}
        >
          {repo} 
        </option>
      ))}
    </select>
  )
}

export default CustomDropDown