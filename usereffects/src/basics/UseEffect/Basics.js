import React , {useState, useEffect} from 'react'
// by default runs after every re-render
// cleanup function 
// second parameter
function Basics() {

    const [value, setValue] = useState(0)

    useEffect(()=>{
        console.log('use Effect')
        document.getElementById('headerjust').innerHTML = `Then value is ${value}`
    })

    console.log('Render Component')
    return (
        <div>
            <h1>{value}</h1>
            <h2 id='headerjust'>This is H2 tag</h2>
            <button onClick={()=>setValue(value+1)}>Increase</button>
        </div>
    )
}

export default Basics
