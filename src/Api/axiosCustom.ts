import axios from "axios";

const API_URL = 'https://developer.themoviedb.org/reference';
axios.defaults.baseURL = API_URL;

export default axios;