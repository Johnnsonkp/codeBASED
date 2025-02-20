export const userInitialState = {
  user: {},
  app_status: {status: "", message: ""},
  authorised: false
}

export const userReducer = (state, action) => {
  switch (action.type){
    case "ADD_USER_DETAILS": {
      return {
        ...state,
        user: action.payload
      }
    }
    case "AUTH_USER": {
      return {
        ...state,
        authorised: action.payload
      }
    }
    case "USER_LOGIN_ERROR": {
      return {
        ...state,
        app_status: action.payload
      }
    }
    case "SIGN_OUT": {
      return {
        ...state,
        user: {},
        app_status: {status: "", message: ""},
        authorised: false
      }
    }
    case "UNKNOWN_ERROR": {
      return {
        ...state,
        app_status: action.payload
      }
    }
    default:
      return state;
  }
}