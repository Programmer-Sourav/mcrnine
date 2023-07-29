import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import PlayListCard from "../components/PlayListCard"

export default function PlaylistsDisplay(){

  const { playList, playlistNames} = useContext(AppContext)

    return(
        <div> 
         {
          playlistNames.map((playList)=><PlayListCard data = {playList}/>)
         }
        </div>
    )
}