import { LeftSlideButton, RightSlideButton } from './Buttons/SliderButtons'
import React, {useEffect, useState} from 'react'

import { useTheme } from './theme-provider'

// const Topicbutton = ({topicTitles, onClick, selected, setSelected}) => (
//   topicTitles.map((title, index) => (
//     <button 
//       key={index}
//       style={{
//         margin: '5px', 
//         marginTop: '0px',
//         marginBottom: '2px',
//         fontSize: '13px',
//         border: selected == title && '1px solid rgb(80, 250, 123)',
//         backgroundColor: selected == title && 'rgb(80, 250, 123)',
//         color: selected == title && '#333',
//         marginBottom: '40px'
//       }}
//       onClick={() => setSelected(title)}
//     >{title}
//     </button>
//   ))
// )

// export default Topicbutton

const Topicbutton = ({topicTitles, onClick, selected, setSelected}) => {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(9)
  const {theme} = useTheme();
  
  useEffect(() => {
    setStartIndex(endIndex - 9);
  }, [startIndex, endIndex])
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px', marginBottom: '30px'}}>
      <select id="cars" name="cars" style={{width: '200px', padding: '5px', marginRight: '5px', backgroundColor: '#CCCCCC', border: "1px solid #3C3C3C"}}>
        <option style={{}} value="volvo">Repository</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      

      <div style={{marginRight: '15px'}}>
        <LeftSlideButton 
          onClick={() => setStartIndex((index) => index != 0 && index - 1)}
        />

        <RightSlideButton 
          onClick={() => setEndIndex((endIndex) => (endIndex != topicTitles.length - 1) && endIndex + 1)}
        />
      </div>

      <div style={{display: 'flex', alignItems: 'center'}}>
        {topicTitles.map((title, index) => (
          index >= startIndex && index <= endIndex &&
          
          <button 
            key={index}
            style={{
              margin: '5px', 
              marginTop: '0px',
              marginBottom: '2px',
              fontSize: '13px',
              border: selected == title ? '1px solid rgb(80, 250, 123)' : `${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
              backgroundColor: selected == title && 'rgb(80, 250, 123)',
              color: selected == title && '#333'
            }}
            onClick={() => setSelected(title)}
          >{title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Topicbutton