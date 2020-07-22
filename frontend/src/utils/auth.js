import { createAuthProvider } from "react-token-auth";
import { accessTokenKey } from "../constants/auth";

export const [ useAuth, authFetch, login, logout ] = createAuthProvider({accessTokenKey: accessTokenKey});