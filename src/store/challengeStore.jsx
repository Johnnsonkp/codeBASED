import { createContext, useReducer } from "react";

const initialState = {
  score: 0,
  isSolutionCorrect: false,
  solutionStatus: {status: "", message: ""},
  message: "",
  checkOutput: false,
  processingUserOutput: false,
  processingSolutionOutput: false,
}

const reducer = (state, action) => {
  switch (action.type){
    case "CORRECT_SOLUTION":{
      return {
        ...state,
        isSolutionCorrect: true,
        score: state.score + 1,
        solutionStatus: {status: "correct", message: "Correct solution, well done!!"},
      }
    }
    case "INCORRECT_SOLUTION":{
      return {
        ...state,
        isSolutionCorrect: false,
        score: state.score,
        solutionStatus: {status: "error", message: "Incorrect solution, try again!"},
      }
    }
    case "RESET":{
      return {
        ...state,
        isSolutionCorrect: false,
        score: state.score,
        solutionStatus: {status: "", message: ""},
      }
    }
    default: {
      return state
    }

  }
}

export const ChallengeContext = createContext(initialState);

const ChallengeProvider = ({children}) => {
  const [challengeState, challengeDispatch] = useReducer(reducer, initialState);

  return (
    <ChallengeContext.Provider value={{challengeState, challengeDispatch}}>
      {children}
    </ChallengeContext.Provider>
  )
}

export default ChallengeProvider;