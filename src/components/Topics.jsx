import { LeftSlideButton, RightSlideButton } from './Buttons/SliderButtons'
import React, {useEffect, useState} from 'react'

import CustomDropDown from './DropdownMenu/CustomDropDown'
import NumBubble from './Buttons/NumBubble'
import { useTheme } from './theme-provider'

const Topicbutton = ({dirUpdate, setDirUpdate, topicTitles, onClick, selected, setSelected, userRepos}) => {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(6)
  const {theme} = useTheme();
  const defaultSelect = userRepos && userRepos[0].length || "holbertonschool-low_level_programming"

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

  const dropDownRepoSelect = (e) => {
    setTimeout(() => {
      var e = document.getElementById("repos");
      var value = e.value;
      var text = e.options[e.selectedIndex].text;

      if (dirUpdate != text){
        setDirUpdate(text)  
      }
    }, [200])
  }
  
  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '30px', 
        border: '1px solid red', 
        border: `1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
        padding: '5px',
        overflow: 'hidden'
      }}
    >
      <CustomDropDown 
        items={userRepos}
        defaultSelect={defaultSelect || ''}
        func={dropDownRepoSelect}
      />
      
      <NumBubble 
        num={userRepos && userRepos.length}
      />
      
      <div style={{marginRight: '15px'}}>
        <LeftSlideButton 
          onClick={() => handleLeftClick()}
        />

        <RightSlideButton 
          onClick={() => handleRightClick()}
        />
      </div>

      <div style={{display: 'inline-flex', alignItems: 'center', overflow: 'hidden', maxWidth: '1100px'}}>
        {topicTitles && topicTitles.map((title, index) => (
          index >= startIndex && index <= endIndex &&
          
          <button 
            key={index}
            style={{
              margin: '5px', 
              marginTop: '0px',
              marginBottom: '2px',
              fontSize: '12px',
              border: selected == title ? '1px solid rgb(80, 250, 123)' : `${theme == 'light'? '1px solid #EBEBEB' : '1px solid #3C3C3C'}`,
              backgroundColor: selected == title && 'rgb(80, 250, 123)',
              color: selected == title && '#333',
              borderRadius: '5px',
              padding: '6px'
            }}
            onClick={() => setSelected(title)}
          >
            <NumBubble num={index + 1} />
            {title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Topicbutton