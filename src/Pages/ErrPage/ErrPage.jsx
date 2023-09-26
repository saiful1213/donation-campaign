import { Link } from "react-router-dom";

const ErrPage = () => {
   return (
      <div className="flex justify-center items-center h-screen">
         <div>
            <h1 className="text-2xl font-bold mb-3">Oops !! Something is wrong</h1>
            <Link to={-1}><button className="btn btn-error mx-auto block text-white">Go Back</button></Link>
         </div>
      </div>
   );
};

export default ErrPage;