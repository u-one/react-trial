import axios from 'axios'

export const trainModelApi = axios.create(
    {
        baseURL: "https://uone-train-model-manager-dev.herokuapp.com/api/trainmodel/",
        responseType: "json",
        headers: {
            "Content-Type": "application/json",
        }
    }
);