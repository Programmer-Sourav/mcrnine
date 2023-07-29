import { useContext } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import VideoCardSingleDisplay from "../components/VideoCardSingleDisplay"
import EditnoteToVideo from "../components/EditNoteToVideo"
import { ChakraProvider } from "@chakra-ui/react"

export default function ViewDetails(){
 
    const { allVideos, notes, editTheNote, removeTheNote } = useContext(AppContext)

    const {id} = useParams()
    
    //filtering notes from all notes for particular video id
   function findNoteForEachVideoId(){
    const result = notes.filter((note)=>note.videoId===id)
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
            <h1>My Notes: {findNote? findNote.map((item)=>(
                <li><p>{item.note}</p>
                    <ChakraProvider>
             <EditnoteToVideo data={item}/> 
            </ChakraProvider>
                <button onClick={()=>{removeTheNote(item.id)}}> Delete </button>
                </li>
            )) : ""}</h1>
        </div>
    )
}