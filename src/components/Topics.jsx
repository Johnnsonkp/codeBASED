import { LeftSlideButton, RightSlideButton } from './Buttons/SliderButtons'
import React, {useEffect, useState} from 'react'

import { useTheme } from './theme-provider'

const Topicbutton = ({topicTitles, onClick, selected, setSelected}) => {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(6)
  const {theme} = useTheme();

  const handleLeftClick = () => {
    if (startIndex > 0 && startIndex < topicTitles.length){
      setStartIndex((prev) => prev - 1);
      setEndIndex((prev) => prev - 1);
    }
    else{
      reset();
    }
  }

  const handleRightClick = () => {
    if (endIndex < topicTitles.length){
      setStartIndex((prev) => prev + 1);
      setEndIndex((prev) => prev + 1);
    }
    else{
      reset();
    }
  }

  const reset = () => {
    setStartIndex(0);
    setEndIndex(6)
  }
  
  // useEffect(() => {
  //   setStartIndex(endIndex - 6);
  // }, [startIndex, endIndex])
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px', marginBottom: '30px'}}>
      
      <select 
        id="cars" 
        name="cars" 
        style={{width: '140px', padding: '5px', marginRight: '5px', backgroundColor: '#CCCCCC', border: "1px solid #3C3C3C"}}
      >
        <option value="volvo">Repository <span>{topicTitles && topicTitles.length}</span></option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      

      <div style={{marginRight: '15px'}}>
        <LeftSlideButton 
          onClick={() => handleLeftClick()}
        />

        <RightSlideButton 
          onClick={() => handleRightClick()}
        />
      </div>

      <div style={{display: 'inline-flex', alignItems: 'center'}}>
        {topicTitles.map((title, index) => (
          index >= startIndex && index <= endIndex &&
          
          <button 
            key={index}
            style={{
              margin: '5px', 
              marginTop: '0px',
              marginBottom: '2px',
              fontSize: '11px',
              border: selected == title ? '1px solid rgb(80, 250, 123)' : `${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
              backgroundColor: selected == title && 'rgb(80, 250, 123)',
              color: selected == title && '#333'
            }}
            onClick={() => setSelected(title)}
          >
            <span 
              style={{
                borderRadius: '14px', 
                border: '1px solid black', 
                marginRight: '5px',
                fontSize: '9px',
                background: 'black',
                padding: '0px 2px'
              }}
            >
              {index + 1}
            </span> 
            {title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Topicbutton