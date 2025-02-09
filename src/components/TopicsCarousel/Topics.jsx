import { LeftSlideButton, RightSlideButton } from '../Buttons/SliderButtons'
import {useEffect, useState} from 'react'

import CustomDropDown from '../DropdownMenu/CustomDropDown'
import NumBubble from '../Buttons/NumBubble'
import { useTheme } from '../theme-provider'

const Topicbutton = ({dirUpdate, setDirUpdate, topicTitles, selected, setSelected, userRepos, repoOnDropDownSelect}) => {
  const {theme} = useTheme();
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(6)
  const defaultSelect = repoOnDropDownSelect || userRepos && userRepos[0].length; 

  const handleNavigationClick = (direction) => {
    if (direction === "left" && startIndex > 0) {
      setStartIndex((prev) => prev - 1);
      setEndIndex((prev) => prev - 1);
    } else if (direction === "right" && endIndex < topicTitles.length) {
      setStartIndex((prev) => prev + 1);
      setEndIndex((prev) => prev + 1);
    } else {
      reset();
    }
  };

  const reset = () => {
    setStartIndex(0);
    setEndIndex(6)
  }

  const dropDownRepoSelect = (e) => {
    setTimeout(() => {
      var e = document.getElementById("repos");
      var text = e.options[e.selectedIndex].text;

      if (dirUpdate != text){
        setDirUpdate(text)  
      }
    }, [200])
  }

  const TopicsCarousel = () => {
    return (
      <>
      <LeftSlideButton 
        onClick={() => handleNavigationClick("left")}
      />
      <div 
        style={{
          display: 'inline-flex', 
          alignItems: 'center', 
          overflow: 'hidden', 
          maxWidth: '68vw',
          borderLeft: '5px solid rgba(255, 255, 255, 0)', 
          borderRight: '20px solid rgba(255, 255, 255, 0)'
          }}
      >
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
      <RightSlideButton 
        onClick={() => handleNavigationClick("right")}
      />
      </>
    );
  }

  useEffect(() => {
    if (!dirUpdate){
      setDirUpdate(repoOnDropDownSelect);
    }
  }, [repoOnDropDownSelect])
  
  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '15px', 
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
      <TopicsCarousel />
    </div>
  )
}

export default Topicbutton