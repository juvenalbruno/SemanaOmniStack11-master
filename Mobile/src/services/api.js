import axios from 'axios';

const api = axios.create({
    baseURL: "ip maquina:porta"
});

export default api;