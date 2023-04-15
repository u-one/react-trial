import axios from 'axios'

export const trainModelApi = axios.create(
    {
        baseURL: "https://trainmodel-manager.herokuapp.com/api/trainmodel/",
        responseType: "json",
        headers: {
            "Content-Type": "application/json",
        }
    }
);