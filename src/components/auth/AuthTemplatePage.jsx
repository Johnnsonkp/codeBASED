import "./../../App.css"

import BackgroundGradient from "./BackgroundGradient";
import DemoButton from './DemoButton';
import GithubButton from './GithubButton';
import ImageComponent from "./ImageComponent";
import { LandingTextArea } from "./LandingTextArea";

function AuthTemplatePage({ loadDemoUser, githubAuth}) {
  const bgStyle = {
    backgroundColor: "#111827",
    height: "85vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    width: '100%',
  };
  
  return (
    <div style={bgStyle}>
      <div style={{ position: "relative", display: 'flex'}}>
        <BackgroundGradient />
        <LandingTextArea 
          cta_button_1={<GithubButton onClick={githubAuth}/>}
          cta_button_2={<DemoButton onClick={loadDemoUser}/>}
        />
        <ImageComponent src={"TextEditors.png"} alt={"TextEditor Image"}/>
      </div>
    </div>
  );
}

export default AuthTemplatePage;
