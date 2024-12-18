import React, {useEffect, useState} from 'react'

import Divider from './Divider'
import H5Title from './constants/H5Title';
import SidePanelContainer from './SidePanelComp/SidePanelContainer';
import SidePanelList from './SidePanelComp/SidePanelList';

export default function SidePanel({selected, sideNavTitles, onClick, topicTitles, currentChallengeTitle}) {
  const [btnSelected, setBtnSelected] = useState();

  useEffect(() => {
    setBtnSelected(currentChallengeTitle)
  }, [currentChallengeTitle])
  return (
    <SidePanelContainer>
      <>
        <H5Title 
          title={selected}
          defaultTitle={"Repository"}
        />
        <Divider />
        <SidePanelList 
          sideNavTitles={sideNavTitles}
          setBtnSelected={setBtnSelected}
          btnSelected={btnSelected}
          onClick={onClick}
        />
      </>
    </SidePanelContainer>
  )
}
