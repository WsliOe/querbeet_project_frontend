import Cookies from "js-cookie";
import { URL } from "../utils/constants";

const API_URL = `${URL}/api/v1/hours`;

export async function getHours() {
  const url = API_URL;
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

  return data.data.data;
}

export async function sendHours(data) {
  const url = API_URL;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);
  const dataRes = await response.json();

  if (dataRes.status !== "success") {
    throw new Error(dataRes.status);
  }

  return dataRes;
}

export async function updateHours({ hoursId, data }) {
  const url = `${API_URL}/${hoursId}`;
  const options = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);
  const dataRes = await response.json();
  if (dataRes.status !== "success") {
    throw new Error(dataRes.status);
  }

  return dataRes;
}

export async function deleteHours(hoursId) {
  const url = `${API_URL}/${hoursId}`;

  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt")}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  if (response.status !== 204) {
    throw new Error("Failed to delete!");
  }

  return response;
}
