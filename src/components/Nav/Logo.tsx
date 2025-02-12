import React from 'react'

interface LogoProps{
  title: string;
  url: string;
}

function Logo({title, url}: LogoProps) {
  return (
    <a href={url}>
        <h2 style={{marginBottom: '12px'}}>[-] {title}</h2>
    </a>
  )
}

export default Logo