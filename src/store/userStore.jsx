import { createContext, useReducer } from "react";

const initialState = {
  user: {},
  app_status: {status: "", message: ""},
  authorised: false
}

const reducer = (state, action) => {
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

export const UserContext = createContext(initialState);

const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
