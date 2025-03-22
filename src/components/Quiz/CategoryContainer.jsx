import NumBubble from '../Buttons/NumBubble'
import React from 'react'
import { useTheme } from '../theme-provider'

function CategoryContainer({subcategories, selectedSubcategory, setSelectedSubcategory}) {
  const theme = useTheme()
  
  return (
    <div style={{width: '100%', display: 'flex'}}>
    {
      subcategories && subcategories.map((title, index) => (
        <button
          onClick={() => setSelectedSubcategory(title)}
          style={{
            margin: '5px', 
            padding: '6px', 
            fontSize: '12px',
            borderRadius: '5px',
            backgroundColor: selectedSubcategory == title? "rgb(80, 250, 123)" : '',
            border: selectedSubcategory === title ? '1px solid rgb(80, 250, 123)' : 
              `${theme == 'light'? '1px solid #EBEBEB' : '1px solid #3C3C3C'}`, 
            color: selectedSubcategory === title && '#333',
          }} 
          key={index}
        >
            <NumBubble num={index + 1} />
            {title}
        </button>))
    }
    </div>
  )
}

export default CategoryContainer