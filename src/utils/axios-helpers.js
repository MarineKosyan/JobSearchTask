import axios from 'axios';

export const axiosGet = (url, setState) => axios.get(url).then(res => setState(res.data));

export const axiosPost = (url, data) => axios.post(url, data).then(res => res.data);