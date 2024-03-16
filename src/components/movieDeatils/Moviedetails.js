import React,{useState, useEffect} from 'react'
import "./movie.css"
import { useParams } from "react-router-dom"

function Moviedetails() {
    const [currentMovieDetail, setMovie] = useState();
    const [movieCastDetail, setMovieCastDeatil] = useState();
    const { id } = useParams();


    useEffect(()=>{
        getMovieById();
        getCastData();
        window.scrollTo(0,0)
    }, [])

    const getMovieById = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    const getCastData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieCastDeatil(data.cast))
    }
    return (
        <div className="movie">
           <div className="movie__intro">
               <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
           </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Overview</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className='movie__cast'> CAST </div>
            <div class="grid grid-cols-4 gap-4">
                {
                    currentMovieDetail && movieCastDetail && movieCastDetail.map(cast => (
                        <>
                            { 
                                <span className="castImage">
                                    <img className="movie__castImage" src={"https://image.tmdb.org/t/p/original" + cast.profile_path} />
                                    <span>{cast.name}</span>
                                    <span>Character: {cast.character}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
      )
}

export default Moviedetails