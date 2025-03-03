
export const resetChallenge = (dispatch, type) => {
  dispatch({type: type})
}

export const handleCompareOutput = (userOutput, solutionOutput, challengeDispatch) => {
  atob(userOutput) == atob(solutionOutput) ? 
  challengeDispatch({type: "CORRECT_SOLUTION"}) : 
  challengeDispatch({type: "INCORRECT_SOLUTION"})
  
  resetChallenge(challengeDispatch, "RESET_OUTPUTS")
}
