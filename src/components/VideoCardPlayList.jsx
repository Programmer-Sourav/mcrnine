import { background } from "@chakra-ui/react";
import "../card2.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function VideoCardPlayList({data}) {

  const navigate = useNavigate()
  const { deleteFromPlayList} = useContext(AppContext)

//   const goToCategoryVideos = (category) =>{
//       navigate(`/categoryvid/${category}`)
//   }

  return (
    <div class="cardtwo">
      <img
        src={data.thumbnail}
        alt="download"
      />
      <div class="cardtwo-details">
        <h2>{data.title}</h2>
      </div>
      <button onClick={()=>{deleteFromPlayList(data)}}>Remove</button>
    </div>
  );
}