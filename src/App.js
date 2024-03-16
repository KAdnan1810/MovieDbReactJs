import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming'
import { Routes, Route } from 'react-router-dom';
import Moviedetails from './components/movieDeatils/Moviedetails';
import Search from './components/Search';



function App() {
  return (
   <div className='bg-black text-white'>
   <Navbar/>
   <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="movie/:id" element={<Moviedetails />}></Route>
          <Route path="/search/:searchKey" element={<Search />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
   </Routes>
   </div>
  );
}

export default App;
