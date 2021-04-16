import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
/**
 * 
 * @param {String} content //消息内容
 * @param {String} type  //消息类型
 * @param {String} kind  //图标对应编码，对应消息类型
 * @param {Number} duration  // 延迟消失时间
 * @param {HTMLElement} container //容器
 * @param {Function} callback  //回调函数
 */
export default function (option={}){
 const content = option.content || "";
 const type = option.type || "success";
 const kind = option.kind || "chenggong6"
 const duration = option.duration || 2000;
 const container = option.container || document.body;
 const callback = option.callback || null;

 const iconDom = getComponentRootDom(Icon, {
    kind,
  });
 const div = document.createElement('div');
 console.log(styles)
 console.log(iconDom)
 div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
 div.classList.add(`${styles.message}`,styles[`message-`+type])
 if (getComputedStyle(container).position === "static") {
    container.style.position = "relative";
  }
 //设置样式
 container.appendChild(div);
div.clientHeight
 div.style.transform = `scale(1) translate(-50%, -50%)`;
 div.style.opacity=1

 setTimeout(function (){
  div.style.opacity=0;
  div.style.transform= `scale(1.25) translate(-50%, -50%)`
  div.addEventListener(
    "transitionend",
    function() {
      div.remove();
      // 运行回调函数
      callback();
    },
    { once: true }
  );

 },duration)
 
}