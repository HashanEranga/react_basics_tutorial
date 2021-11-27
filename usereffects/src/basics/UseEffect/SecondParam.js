import React, {useState, useEffect} from 'react'

function SecondParam() {
    const [value, setValue] = useState(0)
    // use effect can be used to run at the initially only also
    useEffect(()=>{
        console.log('Run only in the initial render')
    },[])

    // can use any number of useEffects
    // following will be working on any rendering 
    useEffect(() => {
        console.log('Run in every render')
    })

    // also can use useEffect when only value get updated
    useEffect(()=>{
        console.log('Run only if the value got updated')
    }, [value])

    console.log('Render Component')
    return (
        <>
            <h1>{value}</h1>
            <h2 id="onceHeader">This is only increase once</h2>
            <button onClick={()=>setValue(value+1)}>Increase Once</button>
            <button onClick={()=>{
                document.getElementById('onceHeader').innerHTML = `Other Rendering done. value not updated`
            }
            }>Change H2 Tag</button>
        </>
    )
}

export default SecondParam
