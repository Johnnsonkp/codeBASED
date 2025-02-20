export const challengeInitialState = {
  score: 0,
  isSolutionCorrect: false,
  solutionStatus: {status: "", message: ""},
  message: "",
  checkOutput: false,
  processingUserOutput: false,
  processingSolutionOutput: false,
}

export const challengeReducer = (state, action) => {
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