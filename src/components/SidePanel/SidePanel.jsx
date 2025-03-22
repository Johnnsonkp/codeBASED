import {useEffect, useState} from 'react'

import Divider from '../Common/Divider'
import H5Title from '../constants/H5Title';
import SidePanelList from '../SidePanelComp/SidePanelList';

export default function SidePanel({selected, sideNavTitles, onClick, currentChallengeTitle}) {
  const [btnSelected, setBtnSelected] = useState();

  useEffect(() => {
    setBtnSelected(currentChallengeTitle)
  }, [currentChallengeTitle])
  return (
      <div style={{minWidth: '200px'}}>
        <H5Title 
          title={selected}
          defaultTitle={"Files"}
        />
        <Divider />
        <SidePanelList 
          sideNavTitles={sideNavTitles}
          setBtnSelected={setBtnSelected}
          btnSelected={btnSelected}
          onClick={onClick}
        />
      </div>
  )
}
