import React,{useRef,useEffect,useCallback} from 'react'
import Spinner from 'Components/Spinner/'
import ListOfGifs from 'Components/ListOfGifs/'
import {useGifs} from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import useSEO from 'hooks/useSEO'
import { Helmet } from 'react-helmet'

export default function SearchResults({params}){
    const{keyword}  = params
    const {loading,gifs,setPage}= useGifs({keyword})
    const externalRef = useRef()
    const  {isNearScreen}= useNearScreen({     
        externalRef :loading?null : externalRef,
        once:false})
   const title = gifs? `${gifs.length} resultados de ${decodeURI(keyword)}`:null
    //useSEO({title})
    //const debounceHandleNextPage = useRef()

    
    /* const handleNextPage = ()=>{
        setPage(prevPage =>prevPage+1)
    } */
    /* const handleNextPage =()=>{
       console.log('Next Page')
    } */
    const debounceHandleNextPage =useCallback( 
        debounce(()=>  setPage(prevPage =>prevPage+1),1000),
        [])

    
    
    useEffect(() => {
        //console.log(isNearScreen)
       if(isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage,isNearScreen])
    return <>
     {loading
     ?<Spinner/>
     :<>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={title}></meta>
        </Helmet>
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs}/>
        <div id="visor" ref={externalRef}></div>  {/*visor de infinity scroll*/}
     </>
     }
     
    </>

}
