import {createBrowserRouter} from "react-router-dom"
import Home from '../pages/home/index'
import Explore from '../pages/explore/index'
import Notifications from '../pages/notifications/index'
import NotFound from '../pages/not-found/index'
import MainLayout from '../layouts/main/index'
import Messages from "../pages/messages"
import Lists from "../pages/lists"
import Bookmarks from "../pages/bookmarks"
import Premium from "../pages/premium"
import Profile from "../pages/profile"

const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path: "explore",
                element:<Explore/>
            },
            {
                path: "notifications",
                element:<Notifications/>
            },
            {
                path: "messages",
                element:<Messages/>
            },
            {
                path: "lists",
                element:<Lists/>
            },
            {
                path: "bookmarks",
                element:<Bookmarks/>
            },
            {
                path: "premium",
                element:<Premium/>
            },
            {
				path: 'profile',
				element: <Profile />
			},
           { path:'*',
             element:<NotFound/>
        }]
    }
])

export default routes;