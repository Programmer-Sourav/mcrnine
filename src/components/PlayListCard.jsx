import { background, useConst } from "@chakra-ui/react";
import "../card2.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function PlayListCard({data}) {

  const navigate = useNavigate()

  const goToCategoryVideos = (playlistName) =>{
      navigate(`/playlistdetails/${playlistName}`)
  }
  const { removePlayList } = useContext(AppContext)

  return (
    <div class="cardtwo" >
      <img
        src={"https://i.ytimg.com/vi/koWSpTFYLok/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx_E-4zOrohXmMU5FGlv-zn-yTvg"}
        alt="download"
        onClick={()=>{goToCategoryVideos(data.playlistName)}}
      />
      <div class="cardtwo-details">
        <h2>{data.playlistName}</h2>
        <p>{data.playListDesc}</p>
      </div>
      <div>
      <button onClick={()=>{removePlayList(data.playlistName)}}>Remove</button>
      </div>
    </div>
  );
}
