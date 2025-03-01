import { ChallengeContext } from "./context/ChallengeContext";
import { challengeInitialState } from "./initialState/challengeInitialState";
import { challengeReducer } from "./reducers/ChallengeReducer";
import { useReducer } from "react";

const ChallengeProvider = ({children}) => {
  const [challengeState, challengeDispatch] = useReducer(challengeReducer, challengeInitialState);

  return (
    <ChallengeContext.Provider value={{challengeState, challengeDispatch}}>
      {children}
    </ChallengeContext.Provider>
  )
}

export default ChallengeProvider;