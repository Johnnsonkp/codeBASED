export function postDataToAPI({axios, checkStatus, options, setOutputDetails, setReturnData, setProcessing, setProcessingChecker, setProcessingChecker2})
{
  axios
    .request(options)
    .then(function (response) {
      const token = response.data.token;
      checkStatus(token, axios)
      .then(data => {
        setOutputDetails(data)
        setReturnData({
          expected_output: data.expected_output,
          stdout: data.stdout,
        });
        setProcessing(false)
        setProcessingChecker(false);
        setProcessingChecker2(false);
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
        setReturnSolutionData({
          expected_output: data.expected_output,
          stdout: data.stdout,
        });
        setSolutionProcessing(false);
        setProcessingChecker(false);
        setProcessingChecker2(false);
      })
    })
    .catch((err) => {
      let error = err.response ? err.response.data : err;
      setProcessing(false);
      console.log(error);
      });
}