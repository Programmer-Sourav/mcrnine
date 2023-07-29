import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import VideoCardDisplay from "../components/VideoCardDisplay"
import ExploreCardDisplay from "../components/ExploreCardDisplay"

export default function Explore(){

    const { allVideos }  = useContext(AppContext)
    const [searchState, setSearchState ] = useState("")

    const onChangeHandler = (e) =>{
        setSearchState(e.target.value)
    }

    const filteredVideos = allVideos.filter((video)=>video.title.toLowerCase().includes(searchState.toLowerCase()))
    return(
        
    
            <div>
            <main className="content">
             <p> 
            <input type="search" placeholder="Search by video title" style={{border: "1px solid black", height: "40px", width: "256px" }} value={searchState} onChange={(e)=>{onChangeHandler(e)}}/>
            </p>  
            {filteredVideos.map((video)=>(<li className="displaylist"><ExploreCardDisplay data = {video}/></li>))}
            </main>
            </div>
        
        
    )
}