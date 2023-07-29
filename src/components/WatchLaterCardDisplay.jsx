import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../contexts/AppContext";



export default function WatchLaterCardDisplay({data}) {

   const navigate = useNavigate()

   const goToVideoDetails = (id) =>{
       navigate(`/details/${id}`)
   }
   const { removeFromWatchList } = useContext(AppContext)

    return (
      <div class="cardtwo" >
        <div class="wishlist-icon">
          <i class="fa fa-heart" onClick={()=>{removeFromWatchList(data._id)}}></i>
        </div>
        <img
          src={data.thumbnail}
          alt="download" onClick={()=>{goToVideoDetails(data._id)}}
        />
        <div class="cardtwo-details">
          <h2>{data.title}</h2>
          Views: {data.views}  | Creator: {data.creator}
        </div>
      </div>
    );
  }