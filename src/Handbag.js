import React from 'react'

    const moveAlong= ()=>{
            document.location.hash ='/'
    }
const Handbag = (id)=>{
   

    return(
        <div>
            <iframe src="https://www.youtube.com/embed/oyuoUwxCLMs?rel=0&amp;controls=0&amp;showinfo=0" />
            <button onClick={moveAlong} >Move Along</button>
        </div>
    )
}
export default Handbag;