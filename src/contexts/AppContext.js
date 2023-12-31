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
            id: notes.length+1,
            videoId: videoId,
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
       
       const updatedVideoDetails = {...videoItemToBeAddedInthePlayList, playlistName: playlistTitle}
       setPlayList((playList)=>[...playList, updatedVideoDetails])
    }
  
    const addVideoToPlayList = (videoItemToBeAddedInthePlayList) =>{
       
    }
 
   const  deleteFromPlayList = (playListVideoData) =>{
       console.log(playListVideoData, playList)
       
       const foundPlaylist = playList.find((playListItem)=>playListItem.playlistName===playListVideoData.playlistName)
       
       const updated = playList.filter((playListItem)=>(playListItem._id!==foundPlaylist._id && playListItem.playlistName===playListVideoData.playlistName))
       setPlayList(updated) //not working properly
       
   }

   const removePlayList = (playListName) =>{
      const updated = playlistNames.filter((playListItem)=>playListItem.playlistName!==playListName)
      setPlaylistNames(updated)
   }

   const removeFromWatchList = (itemId) =>{
    setWatchLater(watchLater.filter((watchItem)=>watchItem._id!==itemId))
   }

   const editTheNote = (itemId) =>{
     
   }

   const removeTheNote=(itemId)=>{
      setNotes(notes.filter((note)=>note.id!==itemId))
   }

    return(
        <AppContext.Provider value={{allCategories, allVideos, addToWatchLater, addNoteToVideo, note, setNote, notes, addToPlayList, addVideoToPlayList, playList, playlistNames, deleteFromPlayList, removePlayList, watchLater, removeFromWatchList, editTheNote, removeTheNote, setNotes}} >{children}</AppContext.Provider>
    )
}