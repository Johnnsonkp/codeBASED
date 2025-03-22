import CustomDropDown from '../DropdownMenu/CustomDropDown'
import DropDownSelect from '../Quiz/DropDownSelect'
import Label from '../Buttons/Label'
import NumBubble from '../Buttons/NumBubble'
import TopicsCarousel from './Carousel'
import {useEffect} from 'react'
import { useTheme } from '../theme-provider'

const Topicbutton = ({dirUpdate, setDirUpdate, topicTitles, selected, setSelected, userRepos, repoOnDropDownSelect}) => {
  
  const {theme} = useTheme();
  const defaultSelect = repoOnDropDownSelect || userRepos && userRepos[0].length; 

  const carouselContainer = {
    display: 'flex', 
    alignItems: 'center',
    marginTop: '0px', 
    marginBottom: '0px', 
    border: `1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
    paddingTop: '4px',
    overflow: 'hidden',
    width: '100%'
  }

  const dropDownRepoSelect = (e) => {
    setTimeout(() => {
      var e = document.getElementById("repos");
      var text = e.options[e.selectedIndex].text;
      if (dirUpdate != text){
        setDirUpdate(text)  
      }
    }, [200])
  }

  useEffect(() => {
    if (!dirUpdate){ setDirUpdate(repoOnDropDownSelect)}
  }, [repoOnDropDownSelect])

  const CarouselWrapper = ({children}) => {
    return <div style={carouselContainer}>
      {children}
    </div>
  }
  
  return (
    <div style={carouselContainer}>
      <CustomDropDown 
        items={userRepos}
        defaultselect={defaultSelect || ''}
        func={dropDownRepoSelect}
      />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Label string={"Directories"} />
        <div style={{display: 'flex', height: '30px'}}>
          <TopicsCarousel 
            topicTitles={topicTitles} 
            selected={selected} 
            setSelected={setSelected} 
            theme={theme}
          />
        </div>
      </div>
      </div>
  )
}

export default Topicbutton