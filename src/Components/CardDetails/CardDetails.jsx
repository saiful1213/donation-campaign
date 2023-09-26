import { useLoaderData, useParams } from "react-router-dom";
import ShowCardDetails from "../ShowCardDetails/ShowCardDetails";

const CardDetails = () => {

   const data = useLoaderData();

   const { id } = useParams();
   const intCardId = parseInt(id);
  
   const matchCard = data.find(item => item.id === intCardId);

   return (
      <div>
         <ShowCardDetails card={matchCard}></ShowCardDetails>
      </div>
   );
};

export default CardDetails;