import React from 'react'

function LanguageDropDown({languageOptions, setLanguage, language}) {
  const Options = () => (
    languageOptions && languageOptions? languageOptions.map((lang, index) => (
      <>
        <option 
          key={index}
          style={{fontSize: '8px'}}
          onClick={() => setLanguage(languageOptions.filter((option) => option.value == lang.value))}
        >
          {lang.name}
        </option>
      </>
    )) : ''
  ) 
  return (
    <select style={{marginBottom: '10px', width: '100%', padding: '6px'}}>
      <Options />
    </select>
  )
}

export default LanguageDropDown