import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import HomePage from "./HomePages"
import NotFoundPage from "./NotFoundPage"

const router = createBrowserRouter([
    {   
        path: "/",
        element: <App/>,
        children: [
            
            {
                index: true,
                element: <HomePage/>,
            }],
            errorElement: <NotFoundPage/>

    }

])


export default router;