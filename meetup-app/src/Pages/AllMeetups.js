import React, { useEffect, useState } from 'react'
import MeetupList from '../Components/Meetup/MeetupList';

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(()=>{
    fetch('https://react-meetup-app-bc958-default-rtdb.firebaseio.com/meetups.json')
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      const meetups = []
      for(const key in data){
        const meetup = {
          id : key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false)
      setLoadedMeetups(meetups)
  })

  }, [])

  if(isLoading){
    return(
      <section>
        Loading .....
      </section>
    )
  }

  return (
    <>
        <h1>All Meetups</h1>
        <div>
            <MeetupList meetups={loadedMeetups}/>
        </div>
    </>
  )
}

export default AllMeetups