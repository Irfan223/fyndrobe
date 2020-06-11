import axios from 'axios';
const URL = 'http://www.scrolltechinfo.com/api' // Live API
// const URL = 'http://localhost:5000/api'; // Local API
const apiUrl = axios.create({
    baseURL: URL,
    withCredentials : true
});
export default apiUrl;