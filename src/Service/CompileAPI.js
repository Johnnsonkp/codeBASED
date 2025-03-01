export async function postDataToAPI(identifyer, axios, checkStatus, options, setOutputDetails, setProcessing, setProcessingChecker, setProcessingChecker2) {
  try {
    const response = await axios.request(options);
    const token = response.data.token;
    
    const data = await checkStatus(token, axios);
    
    setOutputDetails(data);
    setProcessing(false);
    setProcessingChecker(false);
    setProcessingChecker2(false);
  } catch (err) {
    const error = err.response ? err.response.data : err;
    setProcessing(false);
    console.error(error);
  }
}

export const compileHeaders = {
  "content-type": "application/json",
  "Content-Type": "application/json",
  "X-RapidAPI-Host": import.meta.env.VITE_APP_RAPID_API_HOST,
  "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
}

export const compileOptions = (formData, compileHeaders) => ({
  method: "POST",
  url: import.meta.env.VITE_APP_RAPID_API_URL,
  params: { base64_encoded: "true", fields: "*" },
  headers: compileHeaders,
  data: formData,
});

export async function postDataToAPIv2(identifyer, axios, checkStatus, options, challengeDispatch) {
  try {
    const response = await axios.request(options);
    const token = response.data.token;
    const data = await checkStatus(token, axios);

    challengeDispatch({type: identifyer, payload: data})
    
  } catch (err) {
    const error = err.response ? err.response.data : err;
    console.error(error);
  }
}

