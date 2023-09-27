import {createBrowserRouter} from "react-router-dom"
import Home from '../pages/home/index'
import Explore from '../pages/explore/index'
import Notifications from '../pages/notifications/index'
import NotFound from '../pages/not-found/index'
import MainLayout from '../layouts/main/index'

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
           { path:'*',
             element:<NotFound/>
        }]
    }
])

export default routes;