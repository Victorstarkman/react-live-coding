import {useGifs} from 'hooks/useGifs'
import {useState, useEffect} from 'react'
import getSingleGif from 'services/getSingleGif'
export default function useSingleGif({id}){

    const {gifs}= useGifs()
    const gifFromCache = gifs.find(singleGif=> singleGif.id=== id)

    const [gif,setGif] = useState(gifFromCache)

    useEffect(function(){
        if(!gif){
            //si no tenemos gif llamar al servicio
            getSingleGif({id})
                .then(setGif)
        }
    },[gif,id])

    return {gif}

}