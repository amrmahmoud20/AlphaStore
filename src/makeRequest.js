import axios from "axios";

export const makeRequest = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_URL_LOCAL ||
    import.meta.env.VITE_REACT_APP_API_URL_GLOBAL,
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
  },
});
