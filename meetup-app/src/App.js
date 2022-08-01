import { Route, Routes } from 'react-router-dom'

import AllMeetups from './Pages/AllMeetups';
import Favourites from './Pages/Favourites';
import NewMeetup from './Pages/NewMeetup';
import MainNavigation from './Components/Layout/MainNavigation'

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<AllMeetups/>}></Route>
        <Route path='/new-meetup' element={<NewMeetup/>}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
