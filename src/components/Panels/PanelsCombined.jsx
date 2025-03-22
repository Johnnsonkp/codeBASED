import React, {useContext, useState} from 'react'

import { ChallengeContext } from '../../store/context/ChallengeContext';
import Panel from './Panels';

const PanelsCombined = (
  {
    theme, 
    language, 
    setTabsContainer, 
    tabsContainer, 
    userInput, 
    onChangeInput, 
    setTabsContainer1, 
    tabsContainer1, 
    count, 
    onChangeSolution
    
  }) => {
    const [blur, setBlur] = useState(true);
    const {challengeState} = useContext(ChallengeContext);
    const user_processing = challengeState.userSolutionExecutionState.userProcessing;
    const solution_processing = challengeState.solutionExecutionState.solutionProcessing;

  return (
    <div style={{display: 'flex', maxWidth: '1100px', width:'66vw'}}>
      <Panel
        mode={"user"} 
        theme={theme}
        language={language}
        setTabsContainer={setTabsContainer}
        tabsContainer={tabsContainer}
        userInput={userInput}
        onChangeInput={onChangeInput}
        showSelectedLangOnly={true}
        blur={blur}
        setBlur={setBlur}
        processing={user_processing}
      />
      <Panel 
        mode={"solution"}
        theme={theme} 
        language={language}
        setTabsContainer={setTabsContainer1}
        tabsContainer={tabsContainer1}
        userInput={count}
        onChangeInput={onChangeSolution}
        processing={solution_processing}
        blur={blur}
        setBlur={setBlur}
        showSelectedLangOnly={false}
      />
    </div>
  )
}

export default PanelsCombined


