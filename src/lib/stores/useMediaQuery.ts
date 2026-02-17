
    import { readable } from 'svelte/store';

    export const mediaQuery = readable(false, (set) => {
        const mediaQueryList = window.matchMedia("(max-width: var(--device-maxes-sm))");
        set(mediaQueryList.matches);

        const listener = (event: MediaQueryListEvent) => {
            set(event.matches);
        };

        mediaQueryList.addEventListener("change", listener);

        return () => {
            mediaQueryList.removeEventListener("change", listener);
        };
    });