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
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { useParams } from "react-router";

  export default function EditnoteToVideo({data}){

   const { note, setNote, addNoteToVideo , setNotes, notes} = useContext(AppContext)
   const { id } = useParams()
   
   const [noteEdit, setNoteEdit] = useState(data.note)
   const noteId = data.id;
   const handleChange = (e) =>{
      setNoteEdit(e.target.value)
   }


   const editNoteToTheVideo = (id, note) =>{
      //update the particular note in the allnotes list
      setNotes(notes.map((noteItem)=>noteItem.id===noteId? {...noteItem, note: note}: noteItem))
   }


    return(
        <div>
  <Popover>
  <PopoverTrigger>
    <i class="fa fa-sticky-note"></i>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Add Your note</PopoverHeader>
    <PopoverBody>
     <input type="text" style={{border: "1px solid black"}} value={noteEdit} onChange={(e)=>{handleChange(e)}}/>
     <button style={{background: "red", padding: "8px", text: "white"}} onClick={(e)=>{editNoteToTheVideo(id, noteEdit)}}>Update</button>
    </PopoverBody>
  </PopoverContent>
</Popover>
</div>
    )
  }


