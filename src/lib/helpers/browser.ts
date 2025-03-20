export const WriteClipBoard = (writing: string) => {
    if(typeof navigator !== "undefined") {
        navigator.clipboard.writeText(writing);
    }
};