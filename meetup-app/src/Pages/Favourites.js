import React, { useContext } from 'react'
import MeetupList from '../Components/Meetup/MeetupList'
import FavouriteContext from '../store/favourite-context'


function Favourites() {
  const favouriteCtx = useContext(FavouriteContext)

  let context

  if (favouriteCtx.totalFavourites !== 0){
      context = <MeetupList meetups={favouriteCtx.favourites}/>
  }
  else {
    context = <span>No items in  the favourites mind adding some ?</span>
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {context}
    </section>
  )
}

export default Favourites