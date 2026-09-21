import { querykeys } from "@/constants";
import { fetchGeoAPI } from "@/services/fetchGeoAPI.service";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";

export function useGeoAPI(name, options = {}) {


    const debounce = useDebounce(name, 500)

    const geo = debounce.trim()
    // const Geo = name?.trim()

    const trueName = geo.length > 2

    return useQuery({
        queryKey: querykeys.geoAPI(geo),
        queryFn: () => fetchGeoAPI(geo),
        enabled: Boolean(trueName),
        ...options
    })

}

