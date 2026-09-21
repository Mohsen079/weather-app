import { getGeoAPI } from "@/API";

export async function fetchGeoAPI(name) {
    return await getGeoAPI(name)
}
