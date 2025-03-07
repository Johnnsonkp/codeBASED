import React from 'react'
import { UserContext } from '../../store/context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function ModeSwitch({theme}) {
  const {userState, userDispatch} = useContext(UserContext)
  const isUserAuth = userState.authorised
  const app_modes = userState?.mode_categories
  const current_mode = userState?.mode
  const navigate = useNavigate()

  const ModeSwitchBtnContainer = {
    display: isUserAuth? 'flex' : 'none',
    transition: 'display 3s',
    marginTop: '22px',
    justifyContent: 'space-around',
    border: `1px solid ${theme == 'light'? 'lightgray' : '#3C3C3C'}`,
    boxShadow: '',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '4px'
  }

  const handleModeSwitch = (mode) => {
    if(mode.name == current_mode){
      return
    }
    if(mode.name != "Code Mode"){
      userDispatch({type: "QUIZ_MODE"});
    }else{
      userDispatch({type: "CODE_MODE"})
    }
    navigate(mode.route)
  }

  const ModeSwitchBtn = () => {
    return(
      <div style={ModeSwitchBtnContainer}>
        {app_modes && app_modes.map((mode, index) => (
          <button 
            key={index } 
            style={{
              borderRadius: '5px',
              padding: current_mode == mode.name? '6px 10px' : '4px 8px',
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