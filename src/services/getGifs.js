//const apiKey ='whpcgFAR8kMJC0EZc3nXhMs9qw0OE5Hw'
import {API_KEY,API_URL} from './settings'

const fromApiResponseToGifs = apiResponse =>{
    const {data=[]}= apiResponse
    if(Array.isArray(data)){
        const gifs = data.map(image =>{
            const {images,title,id}= image
            const {url}= images.downsized_medium
    
            return {title,id,url}
        })
        return gifs
}
return[]
}
export default function getGifs({limit = 5,keyword='argentina',page=0}={}){
    
    const apiURL =  `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=r&lang=en`

    return fetch(apiURL)
        .then(response=> response.json())
        .then(fromApiResponseToGifs)
    }