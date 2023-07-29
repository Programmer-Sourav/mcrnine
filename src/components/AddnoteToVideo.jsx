import {
    useDisclosure,
    Button,
    border,
    Popover,
    PopoverTrigger,
    Portal,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverBody,
    PopoverCloseButton,
    PopoverFooter,
    background,
    styled
  } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useParams } from "react-router";

  export default function AddnoteToVideo(){

   const { note, setNote, addNoteToVideo } = useContext(AppContext)
   const { id } = useParams()
  

   const handleChange = (e) =>{
      setNote(e.target.value)
   }
    return(
        <div>
  <Popover>
  <PopoverTrigger>
    {/* <Button colorScheme="red">Click Me</Button> */}
    <i class="fa fa-sticky-note"></i>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Add Your note</PopoverHeader>
    <PopoverBody>
     <input type="text" style={{border: "1px solid black"}} value={note} onChange={(e)=>{handleChange(e)}}/>
     <button style={{background: "red", padding: "8px", text: "white"}} onClick={()=>{addNoteToVideo(id, note)}}>Add New Note</button>
    </PopoverBody>
  </PopoverContent>
</Popover>
</div>
    )
  }


