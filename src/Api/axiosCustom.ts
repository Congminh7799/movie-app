import axios from "axios";

const axiosCustom = axios;

const API_URL = 'https://api.themoviedb.org/3';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM0OWYzZmUzZjBiZDk5YjUwNmUzOTU1ZjQ5ZmRmZiIsInN1YiI6IjY1NzEzMjFmYjA0NjA1MDEwMDFhY2YyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0PFDMbwmiKqxzmaN440uNtySAX2qxsA_Myv0W6AOwlI';
axiosCustom.defaults.baseURL = API_URL;
axiosCustom.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axiosCustom.defaults.headers.post['Content-Type'] = 'application/json';
axiosCustom.defaults.headers.common['Accept'] = 'application/json';

export default axiosCustom;