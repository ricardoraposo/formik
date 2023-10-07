import axios from "axios";

const app = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})

export default app;
