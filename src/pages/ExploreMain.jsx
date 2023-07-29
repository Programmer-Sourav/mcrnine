import { ChakraProvider } from "@chakra-ui/react";
import AddModal from "../components/ModalSkeleton";
import NavigationLeft from "../components/NavigationLeft";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";
import Content from "./Content";
import Explore from "./Explore";

export default function ExploreMain(){
    const { allCategories, allVideos } = useContext(AppContext)

    return(
        <div className="homedisplay">
            <NavigationLeft/>
      <Explore />
    
            
           
        </div>
    )
}