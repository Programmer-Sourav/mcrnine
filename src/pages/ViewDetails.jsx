import { useContext } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import VideoCardSingleDisplay from "../components/VideoCardSingleDisplay"

export default function ViewDetails(){
 
    const { allVideos, notes } = useContext(AppContext)

    const {id} = useParams()
    
   function findNoteForEachVideoId(){
    const result = notes.find((note)=>note.id===id)
    return result;
   }

    const findNote = findNoteForEachVideoId();

    function findTheParticularVideoFromList(){
       return allVideos.find((video)=>video._id.toString()===id) 
    }

    const details = findTheParticularVideoFromList()
   

    return(
        <div>
            {
             <VideoCardSingleDisplay data = {details}/>
            }
            <h1>My Notes: {findNote? findNote.note : ""}</h1>
        </div>
    )
}