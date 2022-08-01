import React from 'react'
import { Link } from 'react-router-dom'

function MainNavigation() {
  return (
    <>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/new-meetup'>New Meetup</Link></li>
                <li><Link to='/favourites'>Favourites</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default MainNavigation