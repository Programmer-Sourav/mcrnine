import { background } from "@chakra-ui/react";
import "../card2.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router";

export default function PlayListCard({data}) {

  const navigate = useNavigate()

  const goToCategoryVideos = (playlistName) =>{
      navigate(`/playlistdetails/${playlistName}`)
  }

  return (
    <div class="cardtwo" onClick={()=>{goToCategoryVideos(data.playlistName)}}>
      <img
        src={"https://i.ytimg.com/vi/koWSpTFYLok/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx_E-4zOrohXmMU5FGlv-zn-yTvg"}
        alt="download"
      />
      <div class="cardtwo-details">
        <h2>{data.playlistName}</h2>
        <p>{data.playListDesc}</p>
      </div>
    </div>
  );
}
