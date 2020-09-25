import axios from "axios";

const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "https://family-secret.herokuapp.com/",  //input in api
        headers: {
            Authorization: token
        }
    });
}

export default AxiosWithAuth;