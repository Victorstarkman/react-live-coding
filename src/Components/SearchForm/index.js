import React,{useState} from 'react'


 function SearchForm({onSubmit}){
    const [keyword,setKeyword] = useState('')

    const handleSubmit= evt => {
        evt.preventDefault();
        onSubmit({keyword})
        //console.log(keyword)

    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return(
        <>
            <form onSubmit = {handleSubmit}>
                <button>Buscar</button>
                <input type='text' value={keyword} placeholder="Buscador de Gifs" onChange={handleChange}/>
            </form>
        </>

        )
    }
export default React.memo(SearchForm)