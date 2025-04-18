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
    case "SET_USER_PROCESSING":{
      return {
        ...state,
        userSolutionExecutionState: {
          ...state.userSolutionExecutionState,
          userProcessing: true
        },
      };
    }
    case "SET_SOLUTION_PROCESSING":{
      return {
        ...state,
        solutionExecutionState: {
          ...state.solutionExecutionState,
          solutionProcessing: true
        },
      };
    }
    case "SET_USER_OUTPUT":{
      return {
        ...state,
        userSolutionExecutionState: {
          ...state.userSolutionExecutionState,
          userOutputDetails: action.payload,
          userProcessing: false
        },
      };
    }
    case "SET_USER_REPOS":{
      return {
        ...state,
        userRepositories: {
          ...state.userRepositories,
          repos: action.payload
        },
      };
    }
    case "SET_SOLUTION_OUTPUT":{
      return {
        ...state,
        solutionExecutionState: {
          ...state.solutionExecutionState,
          solutionOutputDetails: action.payload,
          solutionProcessing: false
        },
      };
    }
    case "SET_SOLUTION_CHALLENGE":{
      return {
        ...state,
        selectedCodeChallenge: action.payload,
      };
    }
    case "SOLUTION_CHALLENGE_UPDATED":{
      return {
        ...state,
        selectedCodeChallenge: {
          ...state.selectedCodeChallenge,
          update: false
        },
      };
    }
    case "RESET":{
      return {
        ...state,
        isSolutionCorrect: false,
        score: state.score,
        solutionStatus: {status: "", message: ""},
      }
    }
    case "RESET_OUTPUTS":
      return {
        ...state,
        solutionExecutionState: {
          solutionOutputDetails: null,
          solutionProcessing: false,
        },
        userSolutionExecutionState: {
          userOutputDetails: null,
          userProcessing: false,
        },
      };
    default: {
      return state
    }
  }
}