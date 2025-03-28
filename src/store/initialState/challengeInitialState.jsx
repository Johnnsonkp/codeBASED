export const solutionExecutionState = {
  solutionOutputDetails: null,  // Stores compiled solution output
  solutionProcessing: false,    // Tracks if solution compilation is in progress
};

export const userSolutionExecutionState = {
  userOutputDetails: null,
  userProcessing: false,
};

export const compilerExecution = {
  compareOutputs: () => {}, // Compares user output and solution output
  resetOutputs: () => {}, // Resets output states after execution
}

export const selectedCodeChallenge = {
  title: '',
  code: '',
  startingCode: '',
  update: '',
  directory: '',
  repository: '',
  file: '',
  url: ''
}

export const userRepositories = {
  repos: ''
}

export const challengeInitialState = {
  mode: "Code",
  score: 0,
  isSolutionCorrect: false,
  solutionStatus: {status: "", message: ""},
  message: "",
  checkOutput: false,
  processingUserOutput: false,
  processingSolutionOutput: false,
  userCompile: {outputDetails: ''},
  userRepositories,
  selectedCodeChallenge,
  solutionExecutionState,
  userSolutionExecutionState
}