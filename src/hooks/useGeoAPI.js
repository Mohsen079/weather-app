import { querykeys } from "@/constants";
import { fetchGeoAPI } from "@/services/fetchGeoAPI.service";
import { useQuery } from "@tanstack/react-query";

export function useGeoAPI(name, options = {}) {

    const geo = (name || "").trim()
    const Geo = name?.trim()

    return useQuery({
        queryKey: querykeys.geoAPI(geo),
        queryFn: () => fetchGeoAPI(geo),
        enabled: Boolean(geo),
        ...options
    })

}