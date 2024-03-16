import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Card() {
    
  const [topRated, setTopRated] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    getTopRatedData();
  }, [])

  const getTopRatedData = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1")
    .then(res => res.json())
    .then(data => setTopRated(data.results))
  }

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= topRated.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }
   
  return (
    <>
      <div className=' grid grid-cols-4 m-2 p-2 gap-9'>
          { topRated.slice(page * 10 - 10, page * 10).map((movie,data) => 
              <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                              <div key={data}>
                                <img className='h-60 w-48 object-cover cursor-pointer'src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                <h2 className='text-m'>{movie.title}</h2>
                                <p className='text-xs'>Rating:{movie.vote_average}</p>
                              </div>
              </Link>
          )}
      </div>
      {topRated.length > 0 && <div className="pagination">
      <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
  
      {[...Array(topRated.length / 10)].map((_, i) => {
        return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
      })}
  
      <span onClick={() => selectPageHandler(page + 1)} className={page < topRated.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>}
    </>
  )
}

export default Card