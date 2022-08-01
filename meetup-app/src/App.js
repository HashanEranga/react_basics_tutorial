import { Route, Routes } from 'react-router-dom'

import AllMeetups from './Pages/AllMeetups';
import Favourites from './Pages/Favourites';
import NewMeetup from './Pages/NewMeetup';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetups/>}></Route>
        <Route path='/new-meetup' element={<NewMeetup/>}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;

