import axios from "axios";
import {url} from '../config'

const API = axios.create({
  baseURL: url,
});
console.log(API,url);
export const logIn = (formData) => API.post("/auth/login", formData);

export const signUp = (formData) => API.post("/auth/register", formData);
