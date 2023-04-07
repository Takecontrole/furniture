import axios from "axios";

const instance = axios.create({
    baseURL: 'https://furniture.adaptable.app',
});

export default instance;
