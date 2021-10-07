import axios from 'axios';
import queryString from 'query-string';
// import { SESSION_STORAGE_KEY } from '../constants/user.constants';
import { store } from '../app/store';

// Set up default config for http requests here 
// Please have a look at here `https://github.com/axios/axios#request config` for the full list of configs 
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
        // Authorization: 'Bearer ' + sessionStorage.getItem(SESSION_STORAGE_KEY.API_ACCESS_TOKEN)
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    config.headers = {
        // Authorization: 'Bearer ' + sessionStorage.getItem(SESSION_STORAGE_KEY.GRAPH_ACCESS_TOKEN)
    }
    return config;
}, error => {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors 
    throw error;
});

export default axiosClient;
