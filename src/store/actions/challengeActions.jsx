import { extractCodeInstructions } from "../../helpers/CodeExtract"
import { getAllRepos } from "../../api/challengeService"
import { getSelectedCodeChallenge } from "../../api/challengeService"
import { useCallback } from "react"

export const resetChallenge = (dispatch, type) => {
  dispatch({type: type})
}

export const handleCompareOutput = (userOutput, solutionOutput, challengeDispatch) => {
  atob(userOutput) == atob(solutionOutput) ? 
  challengeDispatch({type: "CORRECT_SOLUTION"}) : 
  challengeDispatch({type: "INCORRECT_SOLUTION"})
  
  resetChallenge(challengeDispatch, "RESET_OUTPUTS")
}

export const loadSelectedChallenge = (codingChallengeName, selected, dirUpdate, challengeDispatch) => {
  getSelectedCodeChallenge(codingChallengeName, selected, dirUpdate)
  .then(codeChallenge => {
    let startingCodeBlock = extractCodeInstructions(codeChallenge.data);

    challengeDispatch({
      type: "SET_SOLUTION_CHALLENGE", 
      payload: {
        title: codingChallengeName,
        code: codeChallenge.data,
        startingCode: startingCodeBlock,
        update: true,
        directory: codeChallenge.directory,
        repository: codeChallenge.repository,
        file: codeChallenge.file,
        url: codeChallenge.url
      }
    });
    resetChallenge(challengeDispatch, "RESET_OUTPUTS")
  })
}

export const nextChallenge = (sideNavTitles, currentChallengeTitle, selected, dirUpdate, challengeDispatch) => {
  sideNavTitles && sideNavTitles.map((title, index) => {
    if (title == currentChallengeTitle){
      let nextChallenge = sideNavTitles[index + 1] || sideNavTitles[0]
      return loadSelectedChallenge(nextChallenge, selected, dirUpdate, challengeDispatch)
    }
  })
}

export const loadUserContents = (userInformation, setUserRepos, handleUserContents, challengeDispatch, dummyTopicTitles) => {
  getAllRepos(userInformation)
  .then((data) => {
    if (!data || (Array.isArray(data) && data.length === 0) || 
        (typeof data === "object" && !Array.isArray(data) && Object.keys(data).length === 0)) {
        console.warn("No user data found.");
        setUserRepos(null);
        setDirectories(dummyTopicTitles);
        return;
    }
    setUserRepos(data);
    challengeDispatch({type: "SET_USER_REPOS", payload: data});
    handleUserContents(data);
  })
}

export const handleCompile = (user_stdout, solution_stdout, challengeDispatch) => {
  const userOutput = btoa(user_stdout?.stdout);
  const solutionOutput = btoa(solution_stdout?.stdout);
  handleCompareOutput(userOutput, solutionOutput, challengeDispatch)
}

export const codingChallengeUpdated = (challengeDispatch) => {
  challengeDispatch({type: "SOLUTION_CHALLENGE_UPDATED"})
}