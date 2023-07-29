import { useNavigate } from "react-router";
import "../leftnavigation.css"
import { Link } from "react-router-dom";

export default function NavigationLeft() {
    const navigate = useNavigate()

    const goToPlayList = () =>{
       // navigate(`/playlist`)
       <Link to="/playlist">Playlist</Link>
    }
    return (
      <div class="left-nav">
        <ul>
          <li>
            <i class="fa fa-home"></i>  <Link to="/"> Home</Link>
          </li>
          <li>
            <i class="fa fa-compass"></i> <Link to="/explore"> Explore</Link>
          </li>
          <li>
            <i class="fa fa-clock-o" ></i> <Link to="/playlist">Playlists</Link>
          </li>
          <li>
            <i class="fa fa-list"></i> <Link to="/watchlater"> Watch Later </Link>
          </li>
        </ul>
      </div>
    );
  }