import axios from "axios";
let Base_URL = 'https://hookupbackend.sanchykreations.com/api';

let token = localStorage.getItem('mtdLender') ? JSON.parse(localStorage.getItem('mtdLender')).data?.access : null
const api = axios.create({
    baseURL: Base_URL,
    headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`
    }
});

export default api;