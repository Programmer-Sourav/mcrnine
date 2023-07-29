import { ChakraProvider } from "@chakra-ui/react";
import AddModal from "../components/ModalSkeleton";
import ProductCard from "../components/ProductCard";

export default function Home(){
    return(
        <div>
            <h1>Welcome to Homepage MCRSession-nine. 
                I am Awesome! :P 
            </h1>
            <ChakraProvider>
            <AddModal/>
            </ChakraProvider>
            <ProductCard/>
        </div>
    )
}