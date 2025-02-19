export function postDataToAPI({axios, checkStatus, options, setOutputDetails, setReturnData, setProcessing, setProcessingChecker, setProcessingChecker2})
{
  axios
    .request(options)
    .then(function (response) {
      const token = response.data.token;
      checkStatus(token, axios)
      .then(data => {
        setOutputDetails(data)
        setProcessing(false)
        setProcessingChecker(false);
        setProcessingChecker2(false);
        setReturnData({
          expected_output: data.expected_output,
          stdout: data.stdout,
        });
      })
    })
    .catch((err) => {
      let error = err.response ? err.response.data : err;
      setProcessing(false);
      console.log(error);
    });
}

export function postSolutionDataToAPI({
  axios,
  checkSolutionStatus, 
  options, 
  setSolutionOutputDetails, 
  setReturnSolutionData, 
  setProcessing, 
  setSolutionProcessing,
  setProcessingChecker, 
  setProcessingChecker2
})
{
  axios
    .request(options)
    .then(function (response) {
      const token = response.data.token;
      checkSolutionStatus(token, axios)
      .then(data => {
        setSolutionOutputDetails(data)
        setSolutionProcessing(false);
        setProcessingChecker(false);
        setProcessingChecker2(false);
        setReturnSolutionData({
          expected_output: data.expected_output,
          stdout: data.stdout,
        });
      })
    })
    .catch((err) => {
      let error = err.response ? err.response.data : err;
      setProcessing(false);
      console.log(error);
    });
}