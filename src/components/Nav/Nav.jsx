import Logo from './Logo';
import ModeSwitch from '../AppMode/ModeSwitch';
import SwitchBtn from '../CustomButtons/SwitchBtn';
import UnknownUser from '../userData/UnknownUser';
import UserBadge from '../userData/userBadge';
import { UserContext } from '../../store/context/UserContext';
import { useContext } from 'react'
import { useTheme } from '../theme-provider'

function Nav() {
  const { theme, setTheme } = useTheme();
  const {userState, dispatch} = useContext(UserContext)
  const isUserAuth = userState.authorised
  const userInfo = userState.user

  const NavContainer = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    margin: 'auto',
    marginBottom: '0px',
    paddingLeft: '10px',
    paddingRight: '10px',
    background: 'transparent',
    maxWidth: '1550px'
    // width: '98vw'
  }
  const InnerNav = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    position: 'relative'
  }

  const UserBadgeContainer = {
    border: '1px solid silver', 
    background: 'silver', 
    height: '10%', 
    marginLeft: '10px', 
    marginRight: '10px',
    marginBottom: '0px'
  }

  const NavDivider = () => {
    return (
      <div style={UserBadgeContainer}>
        <hr style={{}}></hr>
      </div>
    )
  }
  
  return (
    <div style={NavContainer}>
      <Logo title={'CodeBASED'} url={'/'}/>
      <ModeSwitch theme={theme}/>
      
      <div style={InnerNav}>
        <SwitchBtn 
          theme={theme} 
          onClick={() => theme == "dark"? setTheme("light") : setTheme("dark")}
        />
        <NavDivider />
        <UserBadge theme={theme} userInfo={userInfo}/>
      </div>
    </div>
  )
}

export default Nav