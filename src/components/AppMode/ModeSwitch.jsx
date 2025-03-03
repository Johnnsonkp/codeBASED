import React from 'react'
import { UserContext } from '../../store/context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../theme-provider'

function ModeSwitch() {
  const {userState, userDispatch} = useContext(UserContext)
  const isUserAuth = userState.authorised
  const app_modes = userState?.mode_categories
  const current_mode = userState?.mode
  const navigate = useNavigate()
  const theme = useTheme();

  const ModeSwitchBtnContainer = {
    display: isUserAuth? 'flex' : 'none',
    transition: 'display 3s',
    marginTop: '22px',
    justifyContent: 'space-around',
    border: '1px solid red',
    border: `2px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '4px'
  }
  const navigateMode = (mode) => {
    return navigate(mode.route)
  }

  const handleModeSwitch = (mode) => {
    if(mode.name == current_mode){
      return
    }
    if(mode.name != "Code Mode"){
      userDispatch({type: "QUIZ_MODE"});
      navigateMode(mode);
    }else{
      userDispatch({type: "CODE_MODE"})
      navigateMode(mode);
    }
  }

  const ModeSwitchBtn = () => {
    return(
      <div style={ModeSwitchBtnContainer}>
        {app_modes && app_modes.map((mode, index) => (
          <button key={index } 
            style={{
              borderRadius: '5px',
              padding: '4px 8px',
              backgroundColor: current_mode == mode.name? "#282C34" : 'transparent',
              color: current_mode == mode.name? "#fff" : '#999',
            }} 
            onClick={ () => handleModeSwitch(mode)}>{mode.name}</button>
          ))}
      </div>)
    }

  return (
    isUserAuth? <ModeSwitchBtn /> : null
  )
}

export default ModeSwitch