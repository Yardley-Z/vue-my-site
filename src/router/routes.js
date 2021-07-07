import Home from "@/views/Home"
import Blog from "@/views/Blog"
import About from "@/views/About"
import Message from "@/views/Message"
import Project from "@/views/Project"
import BlogDetail from "@/views/Blog/Details"

const routesArr = [
    {
        path: "/", component: Home, meta: {
            title: "首页",
        },
    },
    {
        path: "/blog", component: Blog, meta: {
            title: "文章"
        }
    },
    {
        name: "CategoryBlog", path: "/blog/cate/:categoryId", component: Blog, meta: {
            title: "文章"
        }
    },
    {
        name: "BlogDetail", path: "/blog/:id", component: BlogDetail, meta: {
            title: "文章详情"
        }
    },
    {
        path: "/about", component: About, meta: {
            title: "关于我"
        }
    },
    {
        path: "/message", component: Message, meta: {
            title: "留言板"
        }
    },
    {
        path: "/project", component: Project, meta: {
            title: "项目"
        }
    },
]
export default routesArr