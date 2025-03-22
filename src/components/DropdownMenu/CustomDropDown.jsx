import './customDrop.css'

import React, {useState} from 'react'

// import DropDownSelect from '../Quiz/DropDownSelect';
import Label from '../Buttons/Label';
import { useTheme } from '../theme-provider';

function CustomDropDown({items, defaultselect, func}) {
  const {theme} = useTheme();
  const [selectedVal, setSelectedVal] = useState()

  const optionStyles = {
    margin: '5px', 
    padding: '5px', 
    border: '1px solid red',
    width: '500px', 
    height: '500px'
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
     <Label string={"Repositories"}/>
      <select
        value={selectedVal || defaultselect}
        onChange={(e) => setSelectedVal(e.target.value)}
        onMouseLeave={(e) => func(e)}
        id="repos" 
        className="select"
        name="repos" 
        style={{
          color: `${theme == 'light'? '#333' : '#fff'}`,
          fontSize: '11px',
          fontWeight: 'bold',
          marginBottom: '5px'
        }}
      >
        {items && items.map((repo, index) => (
          <option
            key={index}
            style={optionStyles}
            value={repo}
            onChange={() => setSelectedVal(repo)}
          >
            {repo} 
          </option>
        ))}
      </select>
    </div>
  )
}

export default CustomDropDown


// # TODO: Add directory update on click of dropdown to globalState (contextAPI)