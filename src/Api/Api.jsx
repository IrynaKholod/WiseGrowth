import axios from 'axios';

const BASE_URL = 'https://api.wisey.app/api/v1';
const PROXY_URL = "https://cors-proxy.fringe.zone/";

const instance = axios.create({
  baseURL: BASE_URL,
});

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const GetToken = async () => {
  try {
    const { data } = await instance.get(
      '/auth/anonymous?platform=subscriptions'
    );
    token.set(data.token);
    return data.token;
  } catch (err) {
    console.log(err);
  }
};

export const GetAllCourses = async () => {
  await GetToken();
  const response = await instance.get('/core/preview-courses');
  return response;
};

export const GetCourseById = async id => {
  await GetToken();
  const response = await instance.get(`/core/preview-courses/${id}`);
  return response.data;
};
