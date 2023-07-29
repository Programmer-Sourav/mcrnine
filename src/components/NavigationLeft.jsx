import { useNavigate } from "react-router";
import "../leftnavigation.css"

export default function NavigationLeft() {
    const navigate = useNavigate()

    const goToPlayList = () =>{
        navigate(`/playlist`)
    }
    return (
      <div class="left-nav">
        <ul>
          <li>
            <i class="fa fa-home"></i> Home
          </li>
          <li>
            <i class="fa fa-compass"></i> Explore
          </li>
          <li>
            <i class="fa fa-clock-o" onClick={()=>{goToPlayList()}}></i> Playlists
          </li>
          <li>
            <i class="fa fa-list"></i> Watch Later
          </li>
        </ul>
      </div>
    );
  }