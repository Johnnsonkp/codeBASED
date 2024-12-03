import React from 'react'

function LanguageNav({languageOptions, style, setLanguage, language }) {
  return (
    <div 
      style={{
        border: '0.1px solid #606266', 
        width: '52px',
        marginLeft: '20px',
        marginRight: '0px',
        // marginLeft: 'auto', 
        // marginRight: 'auto', 
        borderRadius: '5px',
        height: '100%',
        maxHeight: '785px',
        minHeight: '785px',
        style
      }}
      // style={style}
    >
      {languageOptions.map((lang, index) => (
          <button 
            onClick={() => setLanguage(languageOptions.filter((option) => option.value == lang.value))}
            key={index} 
            style={{
              marginTop: '7px', 
              boxSizing: 'border-box', 
              width: '40px', 
              marginRight: 'auto',
              marginLeft: 'auto',
              display: 'flex', 
              justifyContent: 'center',
              background: `${language[0].value == lang.value? "#51FA7B" : "transparent" }`,
              border: '0.1px solid #606266'

            }}
          >
            {lang && lang.image? 
              <img style={{width: '25px', padding: '0px'}} src={lang.image} /> : 
              lang.name
            } 
          </button>
        ))
      }
    </div>
  )
}

export default LanguageNav