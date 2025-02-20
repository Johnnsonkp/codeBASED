import { challengeInitialState } from "../reducers/ChallengeReducer";
import { createContext } from "react";

export const ChallengeContext = createContext(challengeInitialState);