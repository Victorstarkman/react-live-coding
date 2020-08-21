import React,{useCallback} from 'react'
import {useLocation} from 'wouter'
import {useGifs} from 'hooks/useGifs'
import ListOfGifs from 'Components/ListOfGifs'
import TrendingSearches from 'Components/TrendingSearches'
import SearchForm from 'Components/SearchForm'
import Helmet from 'react-helmet'

export default function Home(){

    //const [keyword,setKeyword] = useState('')
    const [path,pushLocation] = useLocation()
   
    const {loading,gifs}= useGifs()

   
    const handleSubmit=useCallback(({ keyword}) => {
            pushLocation(`/search/${keyword}`)
        },[pushLocation])


  
   
    return(
        <>
        <Helmet>
            <title>Home | Giffy</title>
        </Helmet>
          <SearchForm onSubmit={handleSubmit}/>
            <div className = "App-main">
                <div className="App-result">
                     <h3 className='App-title'>Ultima Busqueda </h3>
                    <ListOfGifs gifs={gifs}/>
                </div>
           
                <div className="App-category">
                   <TrendingSearches/>
                </div>
            </div> 
        </>
    )

}
