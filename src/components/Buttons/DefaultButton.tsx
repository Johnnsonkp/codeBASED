import React from 'react'

interface ButtonProps{
  title: string;
  onClick: () => void | any;
}


function DefaultButton({title, onClick}: ButtonProps) {
  return (
    <button 
      style={{margin: '5px', fontSize: '14px'}} 
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default DefaultButton