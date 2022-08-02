import React, { useContext } from 'react'
import FavouriteContext from '../../store/favourite-context'
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
  const favouriteCtx = useContext(FavouriteContext)

  const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id)

  function toggleFavouriteStatusHandler(){
    if(itemIsFavourite){
      favouriteCtx.removeFavourite(props.id)
    }
    else{
      favouriteCtx.addFavourite({
        id : props.id,
        title : props.title,
        image : props.image,
        description : props.description,
        address : props.address
      })
    }
  }

  return (
    <div className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from favourites' : 'To favourites'}</button>
        </div>
    </div>
  )
}

export default MeetupItem