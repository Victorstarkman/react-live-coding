import React  from 'react'
import useSEO from 'hooks/useSEO'
import Gif from 'Components/Gif'
import useGlobalGifs from 'hooks/useGlobaGifs'
import{Helmet} from 'react-helmet'

export default function Details({params}){

    const gifs = useGlobalGifs();
   
    const gif = gifs.find((singleGif)=> singleGif.id===params.id)
    const title = gif ? gif.title : null
    //useSEO({description: `Details o ${title}`,title})
    //console.log(title)
    return <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Gif {...gif}/>
    </>
}