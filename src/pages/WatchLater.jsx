import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import WatchLaterCardDisplay from "../components/WatchLaterCardDisplay"


export default function WatchLater(){

    const { watchLater } = useContext(AppContext)

    return(
        <div>
            {
                watchLater.map((watch)=>(
                    <WatchLaterCardDisplay data={watch}/>
                ))
            }
        </div>
    )
}