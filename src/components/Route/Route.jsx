
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Layouts/Home';
import HomeProduct from '../../Pages/HomeProducts/HomeProduct';
import About from '../../Pages/About';
import HomeProductDetails from '../../Pages/HomeProducts/HomeProductDetails';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Profile from '../../Pages/Profile/Profile';
import Error from '../../Pages/Error/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <HomeProduct></HomeProduct>,
                loader: () => fetch('https://dummyjson.com/products'),
            },
            {
                path: '/products/:id',
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`),
                element: <HomeProductDetails></HomeProductDetails>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard',
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    }
                ]
            }
        ]
    }
])

export default router;