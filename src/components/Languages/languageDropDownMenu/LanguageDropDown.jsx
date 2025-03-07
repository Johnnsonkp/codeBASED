import React from 'react'

function LanguageDropDown({languageOptions, setLanguage, language}) {
  return (
    <select style={{marginBottom: '10px', width: '100%', padding: '6px'}}>
      {languageOptions && languageOptions? languageOptions.map((lang, index) => (
          <option 
            key={index}
            style={{fontSize: '8px'}}
            value={lang.name}
            onClick={() => setLanguage(languageOptions.filter((option) => option.value == lang.value))}
          >
            {lang.name}
          </option>
      )) : ''}
    </select>
  )
}

export default LanguageDropDown