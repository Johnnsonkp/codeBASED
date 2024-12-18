import React from 'react'

export default function H5Title({title, defaultTitle}) {
  return (
    <h5 
      style={{
        marginBottom: '10px', 
        textAlign: 'center'
      }}
    > 
      {title? title.charAt(0).toUpperCase() + title.slice(1) 
        : defaultTitle}
    </h5>
  )
}
