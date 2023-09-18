import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import AddContact from "../components/AddContact/AddContact";
import Home from "../components/Home/Home";
import UpdateContact from "../components/UpdateContact.jsx/UpdateContact";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader:() => fetch('https://contact-management-server-phi.vercel.app/contacts')
    },
    {
        path:"/add",
        element:<AddContact></AddContact>
    },
    {
      path:'/updatecontact/:id',
      element:<UpdateContact></UpdateContact>,
      loader:({params}) => fetch(`https://contact-management-server-phi.vercel.app/contacts/${params.id}`)
    },
  ]);

  export default router;