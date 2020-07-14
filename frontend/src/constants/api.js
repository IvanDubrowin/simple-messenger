const DEV_BASE_URL = "http://localhost:8000/api";
const PROD_BASE_URL = `${window.location.origin}/api`;
const BASE_URL = process.env.NODE_ENV === "development" ? DEV_BASE_URL : PROD_BASE_URL;

export const registerEndpoint = `${BASE_URL}/auth/register/`;
export const loginEndpoint = `${BASE_URL}/auth/jwt/login/`;
export const currentUserEndpoint = `${BASE_URL}/users/me/`;