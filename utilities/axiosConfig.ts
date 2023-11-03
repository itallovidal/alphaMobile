import axios from "axios";

const urlLocal = 'http://10.0.2.2:3333'
const urlOnline = 'https://projetoalphaapi.onrender.com'


export const api = axios.create({
    baseURL: urlOnline
})