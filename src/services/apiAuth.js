import Cookies from "js-cookie";
import { URL } from "../utils/constants";

const API_URL = `${URL}/api/v1/users`;

const API_ENDPOINTS = {
  LOGIN: `${API_URL}/login`,
  SIGNUP: `${API_URL}/signup`,
  ME: `${API_URL}/me`,
  LOGOUT: `${API_URL}/logout`,
  FORGOTPASSWORD: `${API_URL}/forgotPassword`,
  RESETPASSWORD: `${API_URL}/resetPassword`,
};

export async function login({ email, password }) {
  const url = API_ENDPOINTS.LOGIN;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  if (data.status !== "success") {
    throw new Error(data.status);
  }

  return data;
}

export async function signup({
  firstName,
  lastName,
  email,
  password,
  passwordConfirm,
}) {
  const url = API_ENDPOINTS.SIGNUP;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    }),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  if (data.status !== "success") {
    throw new Error(data.status);
  }

  return data;
}

export async function isLoggedIn() {
  const url = API_ENDPOINTS.ME;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt")}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function logout() {
  const url = API_ENDPOINTS.LOGOUT;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt")}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  if (data.status !== "success") {
    throw new Error(data.message);
  }
}

export async function forgotPassword(email) {
  const url = API_ENDPOINTS.FORGOTPASSWORD;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  if (data.status !== "success") {
    throw new Error(data.status);
  }

  return data;
}

export async function resetPassword(token, password, passwordConfirm) {
  const url = `${API_ENDPOINTS.RESETPASSWORD}/${token}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      passwordConfirm,
    }),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  if (data.status !== "success") {
    throw new Error(data.status);
  }

  return data;
}
