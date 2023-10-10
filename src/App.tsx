import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersFromServer from "./components/Pages/Users.tsx";
import UserDetails from "./components/Pages/Userdetails.tsx";
import Missions from "./components/Pages/Missions.tsx";
import TaskDetails from "./components/Pages/TaskDetails.tsx";
import Home from "./components/Pages/Home.tsx";
import Products from "./components/Pages/Products.tsx";


function App() {
    const router = createBrowserRouter([{
        path: '/',
        element: <Home/>
        },
        {
            path: '/products',
            element: <Products/>
        },
        {
        path: '/users',
        element: <UsersFromServer/>
        },
        {
            path: '/:id',
            element: <UserDetails/>
        },
        {
            path: '/mission/:id',
            element: <Missions/>
        },
        {
            path: '/taskDetails/:id',
            element: <TaskDetails/>
        }
    ])
  return (
        <>
            <RouterProvider router={router}/>
        </>
  );
}

export default App;
