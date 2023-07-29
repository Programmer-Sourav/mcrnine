import { background } from "@chakra-ui/react";
import "../card2.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router";

export default function VideoCard({data}) {

  const navigate = useNavigate()

  const goToCategoryVideos = (category) =>{
      navigate(`/categoryvid/${category}`)
  }

  return (
    <div class="cardtwo" onClick={()=>{goToCategoryVideos(data.category)}}>
      <img
        src={data.thumbnail}
        alt="download"
      />
      <div class="cardtwo-details">
        <h2>{data.category}</h2>
      </div>
    </div>
  );
}
