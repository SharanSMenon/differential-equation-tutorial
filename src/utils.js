export const getDarkMode = () => {
    let darkMode = false;
    if (typeof window !== 'undefined') {
        darkMode = localStorage.getItem('darkMode') === "true"
    }
    return darkMode;
}