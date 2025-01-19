import React, {useEffect, useState} from 'react'

function TopBanner({compare, dummyCode, count, status}) {
  let userCode = compare? compare.replace(/\s/g, "") : 'x';
  let challengeCode = count? count.replace(/\s/g, "") : 'y';
  const statusCheck = status.status;

  const [bannerContents, setBannerContents] = useState({
    color: "",
    message: "",

  });

  const handleStatus = () => {
    switch (statusCheck) {
      case "error":
        setBannerContents({
          color: "#FCEBEB",
          message: status.message
        })
        break;
  
      case "":
        setBannerContents({
          color: '#51FA7B', 
          message: userCode == challengeCode && "Exact match!"
        })
        break;
      
      default:
        setBannerContents({
          color: "",
          message: ""
        })
        break;
    };
  }

  useEffect(() => {
    handleStatus();
  }, [status])

  return (
    <div 
      style={{
        backgroundColor: bannerContents?.color || "", 
        color: '#333', 
        fontWeight: 'semibold'
      }}
    >
      {bannerContents?.message || ""}
    </div>
  )
}

export default TopBanner