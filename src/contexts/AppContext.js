import { createContext, useState } from "react";
import { categories } from "../data/categories";
import { videos } from "../data/videos";

export const AppContext = createContext()


export function AppProvider({children}){

    const [allCategories, setAllCategories] = useState(categories)
    const [allVideos, setAllVideos] = useState(videos)
    const [watchLater, setWatchLater] = useState([])
    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([])
    const [playlistNames, setPlaylistNames] = useState([])
    const [playList, setPlayList] = useState([])




    const addToWatchLater = (videoItemToBeAdded) =>{
        setWatchLater((watchLater)=>[...watchLater, videoItemToBeAdded]) //adding new video to the watch later list
    }
    
    
    const addNoteToVideo = (videoId, noteText) =>{
        const noteObj = {
            id: videoId,
            note: noteText
        }
        setNotes((notes)=>[...notes, noteObj])
        setNote("")
    }


    const addToPlayList = (newPlayList) =>{
        setPlaylistNames((playlistNames)=>[...playlistNames, newPlayList])
    }

    const addVideoToPlayList = (videoItemToBeAddedInthePlayList) =>{
        setPlayList((playList)=>[...playList, videoItemToBeAddedInthePlayList])
    }
 

    return(
        <AppContext.Provider value={{allCategories, allVideos, addToWatchLater, addNoteToVideo, note, setNote, notes, addToPlayList, addVideoToPlayList}} >{children}</AppContext.Provider>
    )
}