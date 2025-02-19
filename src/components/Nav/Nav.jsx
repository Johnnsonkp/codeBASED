import Logo from './Logo';
import SwitchBtn from '../CustomButtons/SwitchBtn';
import UnknownUser from '../userData/UnknownUser';
import UserBadge from '../userData/userBadge';
import { UserContext } from '../../store/userStore';
import { useContext } from 'react'
import { useTheme } from '../theme-provider'

function Nav() {
  const { theme, setTheme } = useTheme();
  const {state, dispatch} = useContext(UserContext)
  const isUserAuth = state.authorised
  const userInfo = state.user
  
  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}
    >
      <Logo title={'CodeBASED'} url={'/'}/>
        <div 
          style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          <SwitchBtn 
            theme={theme} 
            onClick={() => theme == "dark"? setTheme("light") : setTheme("dark")}
          />
          <div 
            style={{
              border: '1px solid silver', 
              background: 'silver', 
              height: '100%', 
              marginLeft: '10px', 
              marginRight: '10px'
            }}
          >
            <hr></hr>
          </div>
          {isUserAuth?  
            <UserBadge 
              theme={theme} 
              userInfo={userInfo}
            /> : <UnknownUser />
          }
        </div>
    </div>
  )
}

export default Nav