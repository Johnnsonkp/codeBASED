import CustomDropDown from '../DropdownMenu/CustomDropDown'
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
    marginBottom: '15px', 
    border: `1px solid ${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
    padding: '5px',
    overflow: 'hidden',
    width: '100%'
  }

  const labelBubble = {
    border: "1px solid red", 
    fontSize: '11px',
    padding: '3px',
    borderRadius: '10px',
    position: 'relative',
    top: '-8px'
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
    // <CarouselWrapper>
    <div style={carouselContainer}>
      {/* <div style={labelBubble}>Repositories</div> */}
      {/* <NumBubble num={"Repositories"}/> */}
      <Label string={"Repositories"}/>
      <CustomDropDown 
        items={userRepos}
        defaultselect={defaultSelect || ''}
        func={dropDownRepoSelect}
      />
      {/* <NumBubble 
        num={userRepos && userRepos.length}
        num={"Directories"}
      /> */}
      <Label string={"Directories"} />
      <TopicsCarousel 
        topicTitles={topicTitles} 
        selected={selected} 
        setSelected={setSelected} 
        theme={theme}
      />
      </div>
    // </CarouselWrapper>
  )
}

export default Topicbutton