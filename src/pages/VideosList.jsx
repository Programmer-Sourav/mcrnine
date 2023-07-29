import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import { useParams } from "react-router-dom"
import VideoCard from "../components/VideoCard"
import VideoCardDisplay from "../components/VideoCardDisplay"

export default function VideosList(){
  const { allVideos, allCategories } = useContext(AppContext)

  const { category } = useParams()

  const filteredVideosByCategory = allVideos.filter((video)=>video.category===category)

    return(
        <div> 
            {
              filteredVideosByCategory.map((video)=><VideoCardDisplay data={video}/>)
            }
        </div>
    )
}