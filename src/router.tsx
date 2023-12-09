import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouteObject,
    RouterProvider,
} from 'react-router-dom'
import {SignIn} from "./pages/sign-in/sign-in.tsx";
import {NavBar} from "./components/nav-bar/nav-bar.tsx";

const publicRoutes: RouteObject[] = [
    {
        path: '/sign-in',
        element: <SignIn/>,
    },
    {
        path: '/sign-up',
        element: <div>reg</div>,
    },
]

const privateRoutes: RouteObject[] = [
    {path: '*', element: <Navigate to={'/general'}/>},
    {
        path: '/general',
        element: <NavBar/>,
    },
]

const router = createBrowserRouter([
    {element: <PrivateRoutes/>, children: privateRoutes},
    ...publicRoutes,
])

export const Router = () => {
    return <RouterProvider router={router}/>
}

function PrivateRoutes() {
    const isAuth = true

    return isAuth ? <Outlet/> : <Navigate to={'/sign-in'}/>
}