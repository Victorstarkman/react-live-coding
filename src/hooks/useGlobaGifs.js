import {useContext} from 'react'
import GifsContext from '../Context/GiftContext'

export default function useGlobalGifs(){
  return useContext(GifsContext).gifs
}
