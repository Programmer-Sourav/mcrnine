import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../contexts/AppContext";

export default function ExploreCardDisplay({data}) {

    const navigate = useNavigate()
 
    const goToVideoDetails = (id) =>{
        navigate(`/details/${id}`)
    }
   const { watchLater, removeFromWatchList, addToWatchLater } = useContext(AppContext)

     return (
       <div class="cardtwo">
        {watchLater.find((watch)=>watch._id===data._id)? <div class="wishlist-icon">
           <i  class="fa fa-clock-o" aria-hidden="false" onClick={()=>{removeFromWatchList(data._id)}}></i>
         </div> : 
         <div class="wishlist-icon-gray">
           <i  class="fa fa-clock-o" aria-hidden="false" onClick={()=>{addToWatchLater(data)}} ></i>
         </div>}
         <img
           src={data.thumbnail}
           alt="download"
           onClick={()=>{goToVideoDetails(data._id)}}
         />
         <div class="cardtwo-details">
           <h2>{data.title}</h2>
           Views: {data.views}  | Creator: {data.creator}
         </div>
       </div>
     );
   }