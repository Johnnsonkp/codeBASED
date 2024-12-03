import React from 'react';
// import TextEditor from '/assets/TextEditors.png'

function AuthTemplatePage({GithubButton, DemoButton}) {
  const bgStyle = {
    backgroundColor: "#111827",
    height: "85vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',
    width: '100%',
  };

  const gradient = {
    position: "absolute",
    margin: "auto",
    filter: "blur(160px)",
    maxWidth: "20rem",
    height: "13rem",
    top: "3rem",
    inset: 0,
  };

  const aTag = {
    // padding: "0.625rem 1rem",
    textAlign: "center",
    borderRadius: "9999px",
    transitionDuration: "150ms",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    height: "3rem",
    color: "white",
    backgroundColor: "#333",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    outlineOffset: "2px",
  };

  const textCenter = {
    maxWidth: "36rem",
    margin: "0 auto",
    textAlign: "center",
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

  const buttonContainer = {
    paddingTop: "0.75rem",
    display: 'flex'
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

  const imgBlock = {
    width: "50%", // default width for smaller screens
    border: '3px solid darkGray',
    borderRadius: '8px',
    marginTop: "2rem", // equivalent to `mt-8`
    "@media (minWidth: 768px)": {
      width: "50%", // equivalent to `md:w-1/2`
      marginTop: "0", // equivalent to `md:mt-0`
    },
    "@media (minWidth: 1024px)": {
      width: "66.6667%", 
    },
  };

  const imgBlockInner = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  return (
    <div style={bgStyle}>
      <section>
        <div style={{ position: "relative", display: 'flex' }}>
          <div
            style={{
              background:
                "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)",
              ...gradient,
            }}
          ></div>
          <div style={{ position: "relative" }}>
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
                    {GithubButton}
                    <div className="sm:pt-0 pt-3" style={{width: '150px', padding: '0px'}}>
                      {/* <a style={aTag} href="">
                        Demo
                      </a> */}
                      {DemoButton}
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
          <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0" style={imgBlock}>
            <img 
              style={imgBlockInner} 
              src="TextEditors.png" alt="Responsive Design"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthTemplatePage;
