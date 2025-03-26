import React from 'react'

function BackgroundGradient() {
  const gradient = {
    position: "absolute",
    margin: "auto",
    filter: "blur(160px)",
    maxWidth: "20rem",
    height: "13rem",
    top: "3rem",
    inset: 0,
  };
  
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)",
        ...gradient,
      }}
    ></div>
  )
}

export default BackgroundGradient