import axios from "axios";

export const Axios = axios.create({
  baseURL:
    "https://knowledge-test-react-default-rtdb.europe-west1.firebasedatabase.app/",
});
