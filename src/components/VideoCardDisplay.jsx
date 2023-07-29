import { useNavigate } from "react-router";



export default function VideoCardDisplay({data}) {

   const navigate = useNavigate()

   const goToVideoDetails = (id) =>{
       navigate(`/details/${id}`)
   }

    return (
      <div class="cardtwo" onClick={()=>{goToVideoDetails(data._id)}}>
        <div class="wishlist-icon">
          <i class="fa fa-heart"></i>
        </div>
        <img
          src={data.thumbnail}
          alt="download"
        />
        <div class="cardtwo-details">
          <h2>{data.title}</h2>
          Views: {data.views}  | Creator: {data.creator}
        </div>
      </div>
    );
  }