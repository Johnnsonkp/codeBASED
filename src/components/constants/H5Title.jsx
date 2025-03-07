import Label from '../Buttons/Label'
import React from 'react'

export default function H5Title({title, defaultTitle}) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Label string={"Files"}/>
    <h5 
      style={{
        marginBottom: '10px', 
        textAlign: 'center'
      }}
    > 
      {title? title.charAt(0).toUpperCase() + title.slice(1) 
        : defaultTitle}
    </h5>
    </div>
  )
}
