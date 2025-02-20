import { userInitialState, userReducer } from "./reducers/UserReducer";

import { UserContext } from "./context/UserContext";
import { useReducer } from "react";

const UserProvider = ({children}) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  return (
    <UserContext.Provider value={{userState, userDispatch}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;