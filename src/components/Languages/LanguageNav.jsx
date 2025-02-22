import React from 'react'
import { useTheme } from '../theme-provider'

function LanguageNav({languageOptions, setLanguage, language }) {
  const {theme} = useTheme();
  const AllLanguage = () => (
    languageOptions && languageOptions? languageOptions.map((lang, index) => (
      <button 
        onClick={() => setLanguage(languageOptions.filter((option) => option.value == lang.value))}
        key={index} 
        style={{
          marginTop: '7px', 
          boxSizing: 'border-box', 
          width: '25px', 
          marginRight: 'auto',
          marginLeft: 'auto',
          display: 'flex', 
          justifyContent: 'center',
          background: `${language[0].value == lang.value? "#51FA7B" : "transparent" }`,
          border: `1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`
        }}
      >
        {lang && lang.image? 
          <img style={{width: '20px', padding: '0px'}} src={lang.image} /> : 
          lang.name
        } 
      </button>
      ))
      : ''
  )
  
  return (
    <div 
      style={{
        borderRadius: '5px',
        maxHeight: '785px',
      }}
    >
      <AllLanguage />
    </div>
  )
}

export default LanguageNav