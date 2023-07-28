import axios from "axios";
import { BASE_URL } from "../constants";

const checkStatus = (status) => status >= 200 && status < 300;
export const baseUrl = BASE_URL;

const client = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    platform: "web",
    "x-frame-options": "SAMEORIGIN",
  },
  validateStatus: checkStatus,
  timeout: 20000,
});

export const getData = async (endpoint) => {
  try {
    const response = await client.get(endpoint);
    if (response.status === 403) {
      window.location.href === "/";
    }
    return response;
  } catch (error) {
    return error.response;
  }
};

export const postData = async (endpoint, payload) => {
  try {
    const response = await client.post(endpoint, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const patchData = async (endpoint, payload) => {
  try {
    const response = await client.patch(endpoint, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const putData = async (endpoint, payload) => {
  try {
    const response = await client.put(endpoint, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteData = async (endpoint, payload) => {
  try {
    const response = await client.delete(endpoint, {
      data: payload,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
