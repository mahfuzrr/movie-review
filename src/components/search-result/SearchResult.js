import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchResult(){
    const navigate = useNavigate();
    const {movie_name} = useParams();
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        const api = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${movie_name}`;
        fetch(api).then((res) => {
            res.json().then((result) => {
                if(result?.Response){
                    let modifiedData = result?.Search?.slice(0, 50);
                    modifiedData = modifiedData?.sort((a, b) => {
                        if(a.Title < b.Title) { return -1; }
                        if(a.Title > b.Title) { return 1; }
                        return 0;
                    });
                    setMovieData(modifiedData);
                }
            })
        })
    }, [movie_name]);

    return(
        <div data-cy="search-result-row" className="w-4/5 mt-4 ml-auto mr-auto min-h-screen">
            <div>
                <p className="font-['Poppins'] text-[18px] text-center font-medium text-white">Search Result For {movie_name}</p>
            </div>
                {/* <!-- all trending  --> */}
            <div className="mt-5 flex flex-wrap gap-7">
                {/* <!-- single trending  --> */}
                {movieData?.map((data) =>
                    <div key={data?.imdbID} className='cursor-pointer' onClick={() => navigate(`/movie/${data?.imdbID}`)}>
                        <img className="w-44 border border-white rounded-md" src={data?.Poster} alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins'] w-44 text-wrap">{data?.Title}</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">{data?.Year}</span>
                </div>)}
            </div>
        </div>
    );
};