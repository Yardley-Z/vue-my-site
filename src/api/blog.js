import request from "./request";
import querystring from "querystring";

/**
 * 获取博客列表数据
 * @param {Number} page 页数
 * @param {Number} limit 每页数据量
 * @param {Number} categoryid 分类类型
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
        parmas: {
            page,
            limit,
            categoryid
        }
    })
}

/**
 * 获取博客分类
 * @returns 
 */
export async function getBlogTypes() {
    return await request.get("/api/blogtype")
}
