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


    const addToPlayList = (playlistTitle, description, videoItemToBeAddedInthePlayList) =>{
        const found = playlistNames.find((playList)=>playList.playlistName===playlistTitle)
        //check added to check if playlist with same name exists
        if(!found){
        const newPlayList = {
            playlistName: playlistTitle, 
            playListDesc: description
        }
        setPlaylistNames((playlistNames)=>[...playlistNames, newPlayList])
        }
       
       //adding playlistName property to the existing video
       //const updated = videos.map((video)=>video._id === videoItemToBeAddedInthePlayList.id? {...video, playlistName: playlistTitle } : video)
        //setAllVideos(updated)


        //updating playlistname for the video to make a relation between the playlist name and the video
       const updatedVideoDetails = {...videoItemToBeAddedInthePlayList, playlistName: playlistTitle}
       setPlayList((playList)=>[...playList, updatedVideoDetails])
    }
   console.log(playlistNames, playList)
    const addVideoToPlayList = (videoItemToBeAddedInthePlayList) =>{
       
    }
 
   const  deleteFromPlayList = (playListVideoData) =>{
         const updated = playList.filter((playListItem)=>playListItem.playlistName!==playListVideoData.playlistName && playListItem._id!==playListVideoData._id)
         console.log(playListVideoData, updated, playList)

   }

    return(
        <AppContext.Provider value={{allCategories, allVideos, addToWatchLater, addNoteToVideo, note, setNote, notes, addToPlayList, addVideoToPlayList, playList, playlistNames, deleteFromPlayList}} >{children}</AppContext.Provider>
    )
}