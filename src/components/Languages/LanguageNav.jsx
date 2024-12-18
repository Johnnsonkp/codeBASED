import React from 'react'
import { useTheme } from '../theme-provider'

function LanguageNav({languageOptions, style, setLanguage, language }) {
  const {theme} = useTheme();
  
  return (
    <div 
      style={{
        // border: '0.1px solid #606266', 
        width: '30px',
        borderRadius: '5px',
        height: '100%',
        maxHeight: '785px',
        minHeight: '785px',
        marginRight: 'auto',
        marginLeft: 'auto',
        style
      }}
    >
      {languageOptions.map((lang, index) => (
        <button 
          onClick={() => setLanguage(languageOptions.filter((option) => option.value == lang.value))}
          key={index} 
          style={{
            marginTop: '7px', 
            boxSizing: 'border-box', 
            width: '30px', 
            marginRight: 'auto',
            marginLeft: 'auto',
            display: 'flex', 
            justifyContent: 'center',
            background: `${language[0].value == lang.value? "#51FA7B" : "transparent" }`,
            // border: '0.1px solid #606266',
            border: `1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,

          }}
        >
          {lang && lang.image? 
            <img style={{width: '20px', padding: '0px'}} src={lang.image} /> : 
            lang.name
          } 
        </button>
        ))
      }
    </div>
  )
}

export default LanguageNav