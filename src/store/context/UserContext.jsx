import { createContext } from "react";
import { userInitialState } from "../reducers/UserReducer";

export const UserContext = createContext(userInitialState);