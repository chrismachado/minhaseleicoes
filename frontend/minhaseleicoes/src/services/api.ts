import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.104:8080/api/v1'
});

export default api;