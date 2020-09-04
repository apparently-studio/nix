import { useRef, useEffect } from "react";

// Hook for creating click away functionality
// It's usefull when you creating some sort of dropdown and you need to close
// that dropdown when user click outside of the dropdown
function useClickOutside(outsideClickHandler : () => void, cancelInitial : boolean = true) {
    const ref = useRef<any>();
    const firstTime = useRef(cancelInitial);

    function handleClick(e : MouseEvent) {
        if (!firstTime.current && ref && !ref.current.contains(e.target)) {
            outsideClickHandler();
        }

        if (firstTime.current) {
            firstTime.current = false;
        }
    }

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return ref;
}

export default useClickOutside;