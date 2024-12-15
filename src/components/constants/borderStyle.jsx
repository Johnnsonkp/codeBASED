import React from 'react'
import { useTheme } from '../theme-provider'

function borderStyle() {
  const { theme, setTheme } = useTheme();
  
  // const border = `1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`
  const border = `1px solid ${theme == 'light' ? 'blue' : 'red'}`
  
  return {border} 
}

export default borderStyle