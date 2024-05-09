import { Carousel } from 'react-responsive-carousel';
import TrendingMovies from './TrendingMovies';
import toast from 'react-hot-toast';
import useAuthCheck from '../hooks/useAuthCheck';
import { useEffect, useState } from 'react';
export default function Home(){
    const [movieData, setMovieData] = useState([]);
    const [carouselData, setCarouselData] = useState([]);
    const [favouriteData, setFavouriteData] = useState([]);
    const auth = useAuthCheck();
    const handleAddToFavourite = (fav = "") => {
        if(isInFavList(fav)){
            toast.error("Already Added!", {
                position: 'top-right',
                duration: 500,
                id: 'home-add-fav',
            });
        }
        else if(auth){
            if(favouriteData){
                const newData = favouriteData;
                newData?.push(fav);
                localStorage.setItem('fav-movie', JSON.stringify(newData));
                setFavouriteData(newData);
                toast.success("Added to favourite", {
                    position: 'top-right',
                    duration: 900,
                    id: 'home-fav-id',
                });
            }
        }
        else{
            toast.error("Please Register!", {
                position: 'top-right',
                duration: '1000',
                id: 'home-add-fav',
            });
        }
    }

    useEffect(() => {
        fetch('https://review-server.onrender.com/review-api').then((res) => {
            res.json().then((result) => {
                if(result){
                    setMovieData(result);
                    setCarouselData(result?.slice(0, 7));
                }
            })
        })
    }, []);

    useEffect(() => {
        let favData = localStorage.getItem('fav-movie');
        if(favData){
            favData = JSON.parse(favData);
            setFavouriteData([...favData]);
        }
        
    }, []);

    const isInFavList = (fav={}) => {
        for(let i=0; i<favouriteData?.length; i++){
            if(favouriteData[i]?.name === fav?.name)return true;
        }
        return false;
    }

    return(
        <div className='min-h-screen'>
            {/* <!-- here section starts here --> */}
            <div className="w-4/5 mt-8 ml-auto mr-auto">
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                    {carouselData?.map((cData) => 
                    <div key={cData?.id} className="h-[500px] w-full flex items-end bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:opacity-85 before:z-[-5] max-h-[32rem] relative overflow-hidden z-10 px-10 pb-16" 
                    style={{"background-image": 'url(' + cData?.thumbnail + ')'}}>
                        <div className='text-start'>
                            <button disabled type="button" className="bg-white px-5 py-1.5 rounded-[20px] font-['Poppins'] font-medium text-[14px]">{cData?.length}</button>
                            <p className="mt-4 pb-0 text-white font-['Poppins'] text-[30px] font-medium uppercase">{cData?.name}</p>
                            <span className="text-white text-[14px]">{cData?.release_date?.slice(-4)}{cData?.category?.map((cat) => `.${cat}`)}</span><br/>
                            <button onClick={() => handleAddToFavourite(cData)} type="button" className="mt-5 bg-[#95B2EF] text-[14px] px-5 py-2 rounded-[3px] transition ease all active:scale-x-95"> {isInFavList(cData) ? <i class="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>} Add to Favourites</button>
                        </div>
                    </div>
                    )}
                </Carousel>
            </div>
            {/* <!-- Trending section starts here --> */}
            <TrendingMovies movieData={movieData} />
        </div>
    );
};