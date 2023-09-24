import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

const myRouter = createBrowserRouter([
   {
      path: '/',
      element: <Layout></Layout>
   }
])

export default myRouter;