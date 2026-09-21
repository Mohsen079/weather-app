import axiosInstance from "./axiosInstance";

export async function getGeoAPI(name, count = 10) {


    const response = await axiosInstance.get("/search", {
        params: {
            name: name.trim(),
            count,
            format: "json",
            language: 'en'
        }
    })

    return response?.data

}