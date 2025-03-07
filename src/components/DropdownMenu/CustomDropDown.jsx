import React, {useState} from 'react'

import { useTheme } from '../theme-provider';

function CustomDropDown({items, defaultselect, func}) {
  const {theme} = useTheme();
  const [selectedVal, setSelectedVal] = useState()

  return (
    <>
    {/* <label>Repositories</label> */}
    <select
      value={selectedVal || defaultselect}
      onChange={(e) => setSelectedVal(e.target.value)}
      id="repos" 
      name="repos" 
      style={{
        width: '250px', 
        padding: '5px', 
        marginRight: '15px', 
        borderRadius: '5px',
        backgroundColor: 'transparent', 
        border: "1px solid #3C3C3C",
        color: `${theme == 'light'? '#333' : '#fff'}`,
        fontSize: '12px',
        fontWeight: 'bold',
      }}
      onMouseLeave={(e) => func(e)}
    >
      {items && items.map((repo, index) => (
        <option
          key={index}
          // selected={repo == defaultselect? true : false} // # TODO: Hot fix default select error
          onChange={() => setSelectedVal(repo)}
          value={repo}
        >
          {repo} 
        </option>
      ))}
    </select>
    </>
  )
}

export default CustomDropDown


// # TODO: Add directory update on click of dropdown to globalState (contextAPI)