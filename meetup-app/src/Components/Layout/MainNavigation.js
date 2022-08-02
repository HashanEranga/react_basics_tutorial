import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavouriteContext from '../../store/favourite-context'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  const favouriteCtx = useContext(FavouriteContext)

  return (
    <div className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/new-meetup'>New Meetup</Link></li>
                <li><Link to='/favourites'>Favourites
                
                <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
                </Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default MainNavigation