import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewMeetupForm from '../Components/Meetup/NewMeetupForm'

function NewMeetup() {
  const navigate = useNavigate();
  function handleMeetupData(meetup){

    fetch(
      'https://react-meetup-app-bc958-default-rtdb.firebaseio.com/meetups.json',
      {
        method : 'POST',
        body : JSON.stringify(meetup),
        headers : {
          'Content-Type' : 'application/json'
        }
      }
    ).then(()=>{
      navigate('/')
    })

  }

  return (
    <NewMeetupForm onAddMeetup={handleMeetupData}/>
  )
}

export default NewMeetup