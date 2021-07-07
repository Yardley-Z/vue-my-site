export default function debounce(fn, t = 100) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, t);
    }
}