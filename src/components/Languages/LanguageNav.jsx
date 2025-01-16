import React from 'react'
import { useTheme } from '../theme-provider'

function LanguageNav({languageOptions, style, setLanguage, language, showSelectedLangOnly, className }) {
  const {theme} = useTheme();

  const SelectedLang = () => {
    return (
      // <button
      //   style={{
      //     // marginTop: '7px', 
      //     margin: '0px',
      //     boxSizing: 'border-box', 
      //     width: '25px', 
      //     marginRight: 'auto',
      //     marginLeft: 'auto',
      //     display: 'flex', 
      //     justifyContent: 'center',
      //     background: "transparent",
      //   }}
      // >
      //     <img 
      //       style={{width: '20px', padding: '0px'}} 
      //       src={language[0].image} 
      //     /> 
      // </button>

    <img 
      style={{width: '20px', padding: '0px'}} 
      src={language[0].image} 
    /> 
    )
  }

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
      className={className}
      style={{
        // width: '25px',
        borderRadius: '5px',
        // height: '100%',
        maxHeight: `${showSelectedLangOnly? '' : '785px'}`,
        // minHeight: `${showSelectedLangOnly? '' : '785px'}`,
        marginRight: 'auto',
        marginLeft: 'auto',
        // border: '1px solid red',
        style
      }}
    >
      {showSelectedLangOnly? 
        <SelectedLang /> : <AllLanguage />
      }
    </div>
  )
}

export default LanguageNav