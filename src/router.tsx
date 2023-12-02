import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouteObject,
    RouterProvider,
} from 'react-router-dom'

const publicRoutes: RouteObject[] = [
    {
        path: '/sign-in',
        element: <div>login</div>,
    },
    {
        path: '/sign-up',
        element: <div>reg</div>,
    },
]

const privateRoutes: RouteObject[] = [
    { path: '*', element: <Navigate to={'/general'} /> },
    {
        path: '/general',
        element: <div>general</div>,
    },
]

const router = createBrowserRouter([
    { element: <PrivateRoutes />, children: privateRoutes },
    ...publicRoutes,
])

export const Router= () => {
    return <RouterProvider router={router} />
}

function PrivateRoutes() {
    const isAuth = true

    return isAuth ? <Outlet /> : <Navigate to={'/sign-in'} />
}