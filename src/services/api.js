import axios from 'axios';

const api = axios.create({ baseURL: 'https://api-serafins.herokuapp.com' });

export default api