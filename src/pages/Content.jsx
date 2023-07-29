import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import VideoCard from "../components/VideoCard"

export default function Content(){
    const { allCategories, allVideos } = useContext(AppContext)
    return(
        <div> 
            <main className="content">
            <h1 className="categorystyle">Categories</h1>

{/* simply a map over category dataset */}
{
   allCategories.map((category)=>(
    <li className="displaylist">
   <VideoCard data={category}/>
   </li>))
}
            </main>
        </div>
    )
}