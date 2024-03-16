import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const [inputSearchValue, setInputSearchValue] = useState('');
  const navigate = useNavigate(); 

  // Search filed change event
  const onMovieSearchChange = (event) => {
    setInputSearchValue(event.target.value);
  };

  // Navigate to search with searchkey
  const navigateToSearchResult = (event) => {
    event.preventDefault();
    //navigate to search page with queryparmas
    navigate(`search/${inputSearchValue}`)
    // Clean search input after submit
    setInputSearchValue("");
  };

  return (
    <>
    <div className=' bg-gray-600 text-gray-400 h-header'>
                <div className='flex gap-3 p-4 leading-9 '>
                    <Link to="/" ><span className='text-white logo_name'>MovieDb</span></Link>
                    <Link to="/" ><span className='cursor-pointer'>Popular</span></Link>
                    <Link to="/toprated" ><span className='cursor-pointer'>Top Rated</span></Link>
                    <Link to="/upcoming" ><span className='cursor-pointer'>Upcoming</span></Link>
                    <input value={inputSearchValue} type='text' placeholder='Movie Name' className='search-panel' onChange={onMovieSearchChange}/>
                    <button  
                      onClick={navigateToSearchResult} className='border bg-gray-400 search-btn text-white text-l cursor-pointer'>
                        Search </button>
                </div>
    </div>
        </>
  )
}

export default Navbar