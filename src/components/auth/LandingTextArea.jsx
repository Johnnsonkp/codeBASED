import React from 'react'

export const LandingTextArea = ({cta_button_1, cta_button_2}) => {

  const textCenter = {
    maxWidth: "36rem",
    margin: "0 auto",
    textAlign: 'left'
  };

  const titleStyle = {
    color: "#F9FAFB",
    fontSize: "1.875rem",
    fontWeight: "700",
    lineHeight: "2.25rem",
    marginBottom: "1.25rem",
  };

  const paragraphStyle = {
    marginTop: "1.25rem",
    color: "#D1D5DB",
    fontSize: "1rem",
    lineHeight: "1.5rem",
  };

  const formContainer = {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.75rem",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    margin: "auto",
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    color: "transparent",
  };
  
  return (
    <div style={{ position: "relative"}}>
      <div style={{ position: "relative", paddingTop: "60px", padding: '10px', width: "100%" }}>
        <div style={{ position: "relative", zIndex: 10, transition: "opacity 1s ease-in-out", padding: '30px' }}>
          <div style={textCenter}>
            <h2 style={titleStyle}>Your Personal Coding Arena</h2>
            <p style={paragraphStyle}>
              Welcome to codeBASED, the ultimate coding sandbox for developers! Take on unlimited coding challenges directly from your GitHub repositories, refine your skills, and master your craft—all in one place.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 500, fontSize: "1rem" }}>
            <form style={formContainer}>
              {cta_button_1}
              <div className="sm:pt-0 pt-3" style={{width: '150px', padding: '0px'}}>
                {cta_button_2}
              </div>
            </form>
          </div>
        </div>
        <img
          src="https://i.ibb.co/8D7rcYv/download.webp"
          alt="Background"
          loading="lazy"
          style={imageStyle}
        />
      </div>
    </div>
  )
}