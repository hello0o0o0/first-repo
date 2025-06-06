import Login from "../components/login/login";
import Register from "../components/register/register";

const routesTable = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    }
];

export default routesTable;