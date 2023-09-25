import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrPage from "../Pages/ErrPage/ErrPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const myRouter = createBrowserRouter([
   {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrPage></ErrPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('/data.json')
         },
         {
            path: '/donation',
            element: <Donation></Donation>
         },
         {
            path: '/statistics',
            element: <Statistics></Statistics>
         }
      ]
   }
])

export default myRouter;