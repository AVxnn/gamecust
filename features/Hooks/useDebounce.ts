import {useCallback, useRef} from "react";

export default function useDebounce(callback : any, delay : any) {
    const timer = useRef<any>();

    const debouncedCallback = useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback()
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
};