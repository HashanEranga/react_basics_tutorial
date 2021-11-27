import React , {useState, useEffect} from 'react'

const url = 'https://api.github.com/users'

function FetchData() {
    const [users, setUsers] = useState([])

    const getUsers = async ()=>{
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
        console.log(users)
    }

    useEffect(()=>{
        getUsers()
    }, [])

    return (
        <>
            <h1>Github Users</h1>

        </>
    )
}

export default FetchData
