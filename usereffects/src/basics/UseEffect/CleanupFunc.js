import React ,{useState, useEffect} from 'react'

function CleanupFunc() {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = ()=>{
       setSize(window.innerWidth) 
    }

    // using this will be a serious issue when it comes to the memory and the 
    // programme we are building is going larger
    // for that can be use a clean up function 
    useEffect(()=>{
        console.log('useEffect')
        window.addEventListener('resize', checkSize)
    })
    return (
        <>
            <h1>Window Size</h1>
            <h2>{size}</h2>
        </>
    )
}

export default CleanupFunc
