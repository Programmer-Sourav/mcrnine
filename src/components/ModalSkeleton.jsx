import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
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
    background
  } from "@chakra-ui/react";
  import {  ChakraProvider } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
 
  
  export default function AddModal({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [playListName, setPlayListName] = useState("")
    const [description, setDescription] = useState("")
    const { addToPlayList, addVideoToPlayList } = useContext(AppContext)
   
    
    return(
      <div>
     <i class="fa fa-list" onClick={onOpen}></i> 
           
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Add To Playlist</ModalHeader>
        <ModalCloseButton />
  
        <ModalBody>
          
          <input type="text"
            value={playListName}
            style={{
              border: "1px solid black",
              height: "40px",
              width: "392px"
            }}
            placeholder="Enter title of your playlist"
            onChange={(e) => {
              setPlayListName(e.target.value)
            }}
          />
         
          <input type="text"
            value={description}
            style={{
              border: "1px solid black",
              height: "40px",
              width: "392px"
            }}
            placeholder="Write a description"
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
          
         
          <button
            style={{
              background: "blue",
              paddingLeft: "32px",
              paddingRight: "32px",
              height: "40px",
              color: "white",
              margin: "8px",
              float: "right",
              borderRadius: "8px"
            }}
           
            onClick={()=>{addToPlayList(playListName, description, data, onClose())}}
            
          >
            {" "}
            Create A New Playlist{" "}
          </button>
        </ModalBody>
  
        <ModalFooter>
      
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  </Modal>
  </div>
    )
  }