import React from 'react'

function LanguageDropDown({languageOptions, setLanguage, language}) {
  const Options = () => (
    languageOptions && languageOptions? languageOptions.map((lang, index) => (
      <option 
        style={{fontSize: '8px'}}
        onClick={() => setLanguage(languageOptions.filter((option) => option.value == lang.value))}
      >
        {lang.name}
        <img style={{width: '5px', padding: '0px'}} src={lang.image} />
      </option>
    )) : ''
  ) 
  return (
    <select style={{marginBottom: '10px', width: '100%', padding: '6px'}}>
      <Options />
    </select>
  )
}

export default LanguageDropDown