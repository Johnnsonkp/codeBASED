export const storeUserData = (data, dispatch) => {
  dispatch({type: "ADD_USER_DETAILS", payload: data})
  dispatch({type: "AUTH_USER", payload: true})
}

export const userLoginError = (dispatch, status) => {
  dispatch({
    type: "USER_LOGIN_ERROR", 
    payload: {status:'error', message: status
  }})
}