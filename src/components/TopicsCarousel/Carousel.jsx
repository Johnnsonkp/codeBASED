import { LeftSlideButton, RightSlideButton } from '../Buttons/SliderButtons'
import React, { useState } from 'react'

import Label from '../Buttons/Label'
import NumBubble from '../Buttons/NumBubble'

// TODO: Implement the selected button css stying properly

const TopicsCarousel = ({topicTitles, selected, theme, setSelected}) => {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(6)
  const [selectedButton, setSelectedButton] = useState()

  const topicBtnContainer = {
    display: 'inline-flex',
    transition: 'display 3s ease-in-put', 
    alignItems: 'center', 
    overflow: 'hidden', 
    borderLeft: '5px solid rgba(255, 255, 255, 0)', 
    borderRight: '20px solid rgba(255, 255, 255, 0)',
    width: "calc(100% - 10%)",
    maxWidth: '1000px',
    boxSize: 'border-width'
  }

  const handleNavigationClick = (direction) => {
    if (direction === "left" && startIndex > 0) {
      setStartIndex((prev) => prev - 1);
      setEndIndex((prev) => prev - 1);
    } 
    else if (direction === "right" && endIndex < topicTitles.length) {
      setStartIndex((prev) => prev + 1);
      setEndIndex((prev) => prev + 1);
    } 
    else {
      setStartIndex(0);
      setEndIndex(6);
    }
  };

  const handleSelection = (title) => {
    setSelectedButton(title)
    setSelected(title)
  }

  const CarouselItems = () => (
    <div style={topicBtnContainer}>
      {topicTitles && topicTitles.map((title, index) => (
        index >= startIndex && index <= endIndex &&
        <button 
          key={index} 
          style={{
            margin: '5px', 
            fontSize: '12px',
            border: selected === title ? '1px solid rgb(80, 250, 123)' : 
              `${theme == 'light'? '1px solid #EBEBEB' : '1px solid #3C3C3C'}`, 
            backgroundColor: selected == title && 'rgb(80, 250, 123)',
            color: selected === title && '#333',
            borderRadius: '5px',
            padding: '6px',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={() => handleSelection(title)}
        >
          <NumBubble num={index + 1} /> {title}
        </button>
      ))}
    </div>
  )
  
  return (
    <>
      <LeftSlideButton onClick={() => handleNavigationClick("left")}/>
      <RightSlideButton onClick={() => handleNavigationClick("right")}/>
      <CarouselItems />
    </>
  );
}

  export default TopicsCarousel