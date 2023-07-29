import { ChakraProvider } from "@chakra-ui/react";
import AddModal from "../components/ModalSkeleton";
import NavigationLeft from "../components/NavigationLeft";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import VideoCard from "../components/VideoCard";

export default function Home(){
    const { allCategories, allVideos } = useContext(AppContext)

    return(
        <div className="homedisplay">
            
            {/* <ChakraProvider>
            <AddModal/>
            </ChakraProvider>
            <ProductCard/> */}
            <NavigationLeft/>
            <h1 className="categorystyle">Categories</h1>

            {/* simply a map over category dataset */}
            {
               allCategories.map((category)=><VideoCard data={category}/>)
            }
        </div>
    )
}