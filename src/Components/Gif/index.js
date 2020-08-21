import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

 function Gif({title,id,url}){
    return <div className='Gif'>
            <Link href={`/gif/${id}`} className='Gif-link' > 
            <h4>{title}</h4>
            <img loading='lazy' src={url} alt={title}/>
            </Link>
           
         </div>

}
export default React.memo(Gif,(prevProps,nextProvs)=>{
    return prevProps.id===nextProvs.id
})