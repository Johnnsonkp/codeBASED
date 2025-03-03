export const userInitialState = {
  mode_categories: [
    {"name": "Code Mode", "route": "/dashboard"},
    {"name": "Quiz Mode", "route": "/quiz"}
  ],
  mode: 'Code Mode',
  user: {},
  app_status: {status: "", message: ""},
  authorised: false,
}

export const userReducer = (state, action) => {
  switch (action.type){
    case "ADD_USER_DETAILS": {
      return {
        ...state,
        user: action.payload,
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
    case "QUIZ_MODE": {
      return {
        ...state,
        mode: state.mode_categories[1].name,
      }
    }
    case "CODE_MODE": {
      return {
        ...state,
        mode: state.mode_categories[0].name,
      }
    }
    default:
      return state;
  }
}