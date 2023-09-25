import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Cards from "../../Components/Cards/Cards";

const Home = () => {
   const data = useLoaderData();
   // console.log(data)
   return (
      <div>
         <Banner></Banner>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
            {
               data.map(card => <Cards key={card.id} card={card}></Cards>)
            }
         </div>
      </div>
   );
};

export default Home;