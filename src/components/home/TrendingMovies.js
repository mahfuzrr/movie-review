import { useNavigate } from 'react-router-dom';

export default function TrendingMovies({movieData = []}){
    const navigate = useNavigate();

    return(
        <div className="w-4/5 mt-4 ml-auto mr-auto">
            <div>
                <p className="font-['Poppins'] text-[18px] font-medium text-white">Trending</p>
            </div>
                {/* <!-- all trending  --> */}
            <div className="mt-5 flex flex-wrap gap-7">
                {/* <!-- single trending  --> */}
                {movieData?.map((data) =>
                    <div key={data?.id} className='cursor-pointer' onClick={() => navigate(`/movie/${data?.id}`)}>
                        <img className="w-44 border border-white rounded-md" src={data?.thumbnail} alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins'] w-44 text-wrap">{data?.name}</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">{data?.release_date}</span>
                </div>)}
            </div>
        </div>
    );
};