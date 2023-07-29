import { createContext, useState } from "react";
import { categories } from "../data/categories";
import { videos } from "../data/videos";

export const AppContext = createContext()


export function AppProvider({children}){

    const [allCategories, setAllCategories] = useState(categories)
    const [allVideos, setAllVideos] = useState(videos)



    return(
        <AppContext.Provider value={{allCategories, allVideos}} >{children}</AppContext.Provider>
    )
}