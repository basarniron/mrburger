import axios from 'axios';

const instance = axios.create({
    baseURL: "https://mr-burger-9d7a8-default-rtdb.firebaseio.com/"
})

export default instance;