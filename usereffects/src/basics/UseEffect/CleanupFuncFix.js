import React , {useState, useEffect} from 'react'

function CleanupFuncFix() {
    const [size, setSize] = useState(window.innerWidth)

    const changeSize=()=>{
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        console.log('useEffect')
        window.addEventListener('resize', changeSize)
        return () => {
            console.log('Cleanup')
            window.removeEventListener('resize', changeSize)
        }
    })
    
    return (
        <>
            <h1>Window Size</h1>
            <h2>{size} PX</h2>
        </>
    )
}

export default CleanupFuncFix
