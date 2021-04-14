import Home from "@/views/Home"
import Blog from "@/views/Blog"
import About from "@/views/About"
import Message from "@/views/Message"
import Project from "@/views/Project"

const routesArr = [
    {path:"/",component:Home},
    {path:"/blog",component:Blog},
    {path:"/about",component:About},
    {path:"/message",component:Message},
    {path:"/project",component:Project},
]
export default routesArr