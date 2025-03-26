import './LoadingBlock.css'

import React, { useEffect, useState } from 'react'

function ImageComponent({src, alt}) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const imgBlock = {
    width: "50%",
    border: '3px solid darkGray',
    borderRadius: '8px',
    marginTop: "2rem",
    "@media (minWidth: 768px)": {
      width: "50%",
      marginTop: "0",
    },
    "@media (minWidth: 1024px)": {
      width: "66.6667%", 
    },
  };

  const imgBlockInner = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: !imageLoaded ? 'none' : 'inline',
  };

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = src
  }, [src])
  
  return (
    <div style={imgBlock}>
      <div className='outboxPulse' style={{display: imageLoaded ? 'none' : 'inline'}}>
        <div className='innerBox'></div>
      </div>
      <img 
        src={src} 
        alt={alt}
        style={imgBlockInner}
      />
    </div>
  )
}

export default ImageComponent