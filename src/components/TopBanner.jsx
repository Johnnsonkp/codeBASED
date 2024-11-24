import React from 'react'

function TopBanner({compare, dummyCode, count}) {
  let userCode = compare? compare.replace(/\s/g, "") : 'x';
  let challengeCode = count? count.replace(/\s/g, "") : 'y';

  return (
    <div style={{backgroundColor: '#51FA7B', color: '#333', fontWeight: 'semibold'}}>
      {userCode == challengeCode && "YES!!!"}
    </div>
  )
}

export default TopBanner