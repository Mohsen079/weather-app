import { useEffect, useState } from "react";

export function useDebounce(value, delay = 500) {

    const [debounce, setDebounce] = useState(value)

    useEffect(() => {

        const timeOut = setTimeout(() => { setDebounce(value) }, delay)
        return () => clearTimeout(timeOut)
    }, [value, delay])

    return debounce


}