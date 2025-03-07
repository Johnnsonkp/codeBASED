import { LeftSlideButton, RightSlideButton } from '../Buttons/SliderButtons'
import React, { useState } from 'react'

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
    maxWidth: '68vw',
    borderLeft: '5px solid rgba(255, 255, 255, 0)', 
    borderRight: '20px solid rgba(255, 255, 255, 0)',
    // minWidth: "calc(100% - 35%)",
    // maxWidth: '50vw'
    width: "calc(100% - 37%)",
    boxSize: 'border-width'
  }
  // const carouselBtn =  {
  //   margin: '5px', 
  //   fontSize: '12px',
  //   border: selected === selectedButton ? '1px solid rgb(80, 250, 123)' : 
  //     `${theme == 'light'? '1px solid #EBEBEB' : '1px solid #3C3C3C'}`, 
  //   backgroundColor: selected == selectedButton && 'rgb(80, 250, 123)',
  //   color: selected === selectedButton && '#333',
  //   borderRadius: '5px',
  //   padding: '6px',
  //   display: 'flex'
  // }

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
          onClick={() => handleSelection(title)}
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
          }}
        >
          <NumBubble num={index + 1} /> {title}
        </button>
      ))}
    </div>
  )
  
  return (
    <>
      <LeftSlideButton onClick={() => handleNavigationClick("left")}
      />
        <CarouselItems />
      <RightSlideButton onClick={() => handleNavigationClick("right")}
      />
    </>
  );
}

  export default TopicsCarousel