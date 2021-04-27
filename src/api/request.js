import axios from "axios";
import showMessage from "@/utils/showMessage";

const ins = axios.create();

ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      type: "error",
      content: resp.data.msg,
      duration: 2000,
      kind: "shibai"
    })
    return null
  } else {
    return resp.data.data
  }
})
export default ins