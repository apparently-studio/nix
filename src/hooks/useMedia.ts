import { useLayoutEffect, useState } from "react";

// Hook for simulating media queries inside React
// const mobile = useMedia("screen and (max-width: 800px)");
function useMedia(breakpoint : string) {
    const [matches, setMatches] = useState(false);

    function handleMediaChange(e : MediaQueryListEvent) {
        setMatches(e.matches);
    }

    useLayoutEffect(() => {
        if (!window) return; // SSR protection
        const mediaQueryList = window.matchMedia(breakpoint);
        setMatches(mediaQueryList.matches);

        mediaQueryList.addListener(handleMediaChange);
        return () => mediaQueryList.removeListener(handleMediaChange);
    });

    return matches;
}

export default useMedia;