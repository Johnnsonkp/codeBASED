import React from 'react';
// import TextEditor from '/assets/TextEditors.png'

function AuthTemplatePage({GithubButton}) {
  const bgStyle = {
    backgroundColor: "#111827",
    height: "85vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // border: '1px solid red',
    borderRadius: '8px',
    width: '100%',
    // backgroundColor: 'red'
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
    padding: "0.625rem 1rem",
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
    // border: '1px solid red',
    // width: '2000px'
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
    border: '3px solid green',
    borderRadius: '8px',
    marginTop: "2rem", // equivalent to `mt-8`
    "@media (min-width: 768px)": {
      width: "50%", // equivalent to `md:w-1/2`
      marginTop: "0", // equivalent to `md:mt-0`
    },
    "@media (min-width: 1024px)": {
      width: "66.6667%", 
    },
  };

  const imgBlockInner = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  const hoverStyle = { backgroundColor: "#7E22CE" };
  const focusStyle = { boxShadow: "0 0 0 2px #2563EB" };
  const activeStyle = { backgroundColor: "#111827" };

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
                    {/* <GithubButton /> */}
                    {GithubButton}
                    <div className="sm:pt-0 pt-3">
                      <a style={aTag} href="">
                        <svg 
                          // style={{height: '10px', width: '10px'}} 
                          className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path
                              d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z">
                            </path>
                        </svg>
                        Demo
                      </a>
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
