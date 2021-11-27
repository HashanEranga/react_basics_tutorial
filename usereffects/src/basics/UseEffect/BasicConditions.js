import React , {useState, useEffect} from 'react'

function BasicConditions() {

    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log('useEffect');
        if(value >0){
            document.getElementById('headerCondition').innerHTML= `The value is ${value}`
        }
    })

    console.log('render component');

    return (
        <>

            <h1>{value}</h1>
            <h2 className='h2Condition' id='headerCondition'>This is H2 tag</h2>
            <button onClick={()=>setValue(value+1)}>Button with Condition</button>
            
        </>
    )
}

export default BasicConditions
