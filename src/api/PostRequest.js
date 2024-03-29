import axios from "axios";
import {url} from '../config'


const API = axios.create({
  baseURL: url,
});

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`post/${id}/like`, { userId: userId });
