export const checkStatus = async (token, axios) => {
  const options = {
    method: "GET",
    url: import.meta.env.VITE_APP_RAPID_API_URL + "/" + token,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "X-RapidAPI-Host": import.meta.env.VITE_APP_RAPID_API_HOST,
      "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    },
  };
  try {
    let response = await axios.request(options);
    let statusId = response.data.status?.id;

    // Processed - we have a result
    if (statusId === 1 || statusId === 2) {
      // still processing
      setTimeout(() => {
        checkStatus(token)
      }, 2000)
      return
    } else {
      return response.data
    }
  } catch (err) {
    console.log("err", err);
    // setProcessing(false);
    // showErrorToast();
    alert(err)
  }
};

export const checkSolutionStatus = async (token, axios) => {
  const options = {
    method: "GET",
    url: import.meta.env.VITE_APP_RAPID_API_URL + "/" + token,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "X-RapidAPI-Host": import.meta.env.VITE_APP_RAPID_API_HOST,
      "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    },
  };
  try {
    let response = await axios.request(options);
    let statusId = response.data.status?.id;

    // Processed - we have a result
    if (statusId === 1 || statusId === 2) {
      // still processing
      setTimeout(() => {
        checkSolutionStatus(token)
      }, 2000)
      return
    } else {
      
      return response.data
    }
  } catch (err) {
    console.log("err", err);
    // showErrorToast();
    alert(err)
  }
};

// export const compareOutputs = ({outputDetails, solutionOutputDetails, setScore}) => {
//   atob(outputDetails?.compile_output) == atob(solutionOutputDetails?.compile_output)? true : false
  
//   if (atob(outputDetails?.compile_output) == atob(solutionOutputDetails?.compile_output)){
//     setScore((score) => score + 1);
//     alert("Yayy!");
//   }
// }

export const compareOutputs = ({outputDetails, solutionOutputDetails, setScore}) => {
  const userOutput = btoa(outputDetails?.compile_output);
  const solutionOutput = btoa(solutionOutputDetails?.compile_output);
  
  if (atob(userOutput) == atob(solutionOutput)){
    setScore((score) => score + 1);
    alert("Your solution is correct!");
  }
}