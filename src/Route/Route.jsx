import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrPage from "../Pages/ErrPage/ErrPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CardDetails from "../Components/CardDetails/CardDetails";

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
            element: <Donation></Donation>,
            loader: ()=> fetch('/data.json')
         },
         {
            path: '/statistics',
            element: <Statistics></Statistics>
         },
         {
            path: '/cards/:id',
            element: <CardDetails></CardDetails>,
            loader: ()=> fetch('/data.json')
         }
      ]
   }
])

export default myRouter;