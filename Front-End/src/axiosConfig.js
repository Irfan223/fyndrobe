import axios from 'axios';
const apiUrl = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials : true,
    timeout: 1000
});
export default apiUrl;