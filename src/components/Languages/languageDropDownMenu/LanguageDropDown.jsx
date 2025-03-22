import React from 'react'
import { useTheme } from '../../theme-provider'

function LanguageDropDown({languageOptions, setLanguage, language}) {
  const theme = useTheme()

  const languageStyle = {
    marginBottom: '10px', 
    width: '100%', 
    padding: '6px', 
    border: `1px solid ${theme.theme == 'light'? '#D3D3D3' : '#3C3C3C'}`,
    borderRadius: '4px'
  }

  return (
    <select style={languageStyle}>
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
