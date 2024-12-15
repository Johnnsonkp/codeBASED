export const dummyTopicTitles = ["C Basics", "Recursions", "Variables", "functions", "Nested Loops", "Pointers"]

// function postDataToAPI({options, setOutputDetails, setReturnData, setProcessing, setProcessingChecker, setProcessingChecker2})
// {
//   axios
//       .request(options)
//       .then(function (response) {
//         const token = response.data.token;
//         checkStatus(token, axios)
//         .then(data => {
//           setOutputDetails(data)
//           setReturnData({
//             expected_output: data.expected_output,
//             stdout: data.stdout,
//           });
//           setProcessing(false)
//           setProcessingChecker(false);
//           setProcessingChecker2(false);
//         })
//       })
//       .catch((err) => {
//         let error = err.response ? err.response.data : err;
//         setProcessing(false);
//         console.log(error);
//       });
// }