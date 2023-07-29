import { ChakraProvider } from "@chakra-ui/react";
import AddModal from "../components/ModalSkeleton";
import NavigationLeft from "../components/NavigationLeft";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";
import Content from "./Content";

export default function Home(){
    const { allCategories, allVideos } = useContext(AppContext)

    return(
        <div className="homedisplay">
            <NavigationLeft/>
      <Content />
    
            
           
        </div>
    )
}