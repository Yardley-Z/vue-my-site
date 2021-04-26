import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less"
function getImg(el) {
    return el.getElementsByClassName('loading')[0];
}

function createImg() {
    const imgDom = document.createElement('img');
    imgDom.classList.add('loading', styles.loading);
    imgDom.src = loadingUrl
    return imgDom
}



export default function (el, binding) {
    const imgDom = getImg(el)
    if (binding.value) {
        if (!imgDom) {
            const img = createImg();
            el.appendChild(img)
        }
    } else {
        if (imgDom) {
            imgDom.remove()
        }

    }
}