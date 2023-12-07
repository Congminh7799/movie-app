import axios from "axios";

const API_URL = 'https://developer.themoviedb.org/reference';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM0OWYzZmUzZjBiZDk5YjUwNmUzOTU1ZjQ5ZmRmZiIsInN1YiI6IjY1NzEzMjFmYjA0NjA1MDEwMDFhY2YyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0PFDMbwmiKqxzmaN440uNtySAX2qxsA_Myv0W6AOwlI';
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;