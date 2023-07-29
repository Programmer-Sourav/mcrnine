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
 
  
  export default function AddModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
 
  
   
    
    return(
      <div>
     <button onClick={onOpen}>
            <p>Create my own</p>
          </button> 
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Modal Header</ModalHeader>
        <ModalCloseButton />
  
        <ModalBody>
          <label>Name
          <input type="text"
            value={{}}
            style={{
              border: "1px solid black",
              height: "40px",
              width: "392px"
            }}
            onChange={(e) => {
              
            }}
          />
          </label>
         
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
           
          onClick={()=>{onClose()}}
            
          >
            {" "}
            Save{" "}
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