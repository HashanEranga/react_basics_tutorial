import React from 'react'
import NewMeetupForm from '../Components/Meetup/NewMeetupForm'

function NewMeetup() {
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
    )
  }

  return (
    <NewMeetupForm onAddMeetup={handleMeetupData}/>
  )
}

export default NewMeetup