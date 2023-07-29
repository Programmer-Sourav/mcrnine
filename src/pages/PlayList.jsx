import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import PlayListCard from "../components/PlayListCard"
import VideoCard from "../components/VideoCard"
import { useParams } from "react-router"
import VideoCardPlayList from "../components/VideoCardPlayList"


export default function Playlist(){

  const { playList} = useContext(AppContext)
  const { playlistName } = useParams()
  

  function findTheVideos(){
    const result = playList.filter((playListItem)=>playListItem.playlistName === playlistName)
    return result;
  }

  const filterVideosForPlayListName = findTheVideos()

    return(
        <div> 
         {
           <ul>
          <h1>{playlistName}</h1>  
          {filterVideosForPlayListName.map((playListItem)=><VideoCardPlayList data = {playListItem}/>)}
          </ul>
         }
        </div>
    )
}