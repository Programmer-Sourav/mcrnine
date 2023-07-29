import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import AddnoteToVideo from "./AddnoteToVideo";
import { ChakraProvider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import AddModal from "./ModalSkeleton";



export default function VideoCardSingleDisplay({data}) {

   const { addToWatchLater, notes, watchLater , removeFromWatchList}  = useContext(AppContext)
   const {id } = useParams()
 

    
    return (
      <div class="cardtwo">

<iframe
        width="100%"
        height="256"
        src={data.src}
        title={data.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        <div class="cardtwo-details">
           {/* <img src={data.src} height="72" width="72" alt="userpp"/>  */}
          <p><strong>{data.title}</strong></p>
        </div>
        <li>
            {/* <i class="fa fa-clock-o" onClick={()=>{addToWatchLater(data)}}></i> */}
            {watchLater.find((watch)=>watch._id===data._id)? <div class="watch-red">
           <i  class="fa fa-clock-o" aria-hidden="false" onClick={()=>{removeFromWatchList(data._id)}}></i>
         </div> : 
         <div class="watch-gray">
           <i  class="fa fa-clock-o" aria-hidden="false" onClick={()=>{addToWatchLater(data)}} ></i>
         </div>}
          
            <ChakraProvider>
             <AddModal data={data}/> 
            </ChakraProvider>
         
            <ChakraProvider>
            <AddnoteToVideo/>
            </ChakraProvider>
            
          </li>
         
      </div>
    );
  }