import { Carousel } from 'react-responsive-carousel';
import heroImage from '../../assets/hero-image.png';
import TrendingMovies from './TrendingMovies';
import toast from 'react-hot-toast';
import useAuthCheck from '../hooks/useAuthCheck';
export default function Home(){
    const auth = useAuthCheck();
    const handleAddToFavourite = () => {
        if(auth){
            // add to favourite
        }
        else{
            toast.error("Please Register!", {
                position: 'top-right',
                duration: '1000',
                id: 'home-add-fav',
            });
        }
    }
    return(
        <>
            {/* <!-- here section starts here --> */}
            <div className="w-4/5 mt-8 ml-auto mr-auto">
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                    <div className=
                    "h-[500px] bg-cover w-full flex items-end bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:opacity-85 before:z-[-5] max-h-[32rem] relative overflow-hidden z-10 px-10 pb-16" 
                    style={{"background-image": 'url(' + heroImage + ')'}}>
                        <div className='text-start'>
                            <button disabled type="button" className="bg-white px-5 py-1.5 rounded-[20px] font-['Poppins'] font-medium text-[14px]">1hr 12min</button>
                            <p className="mt-4 pb-0 text-white font-['Poppins'] text-[30px] font-medium uppercase">fast and furious</p>
                            <span className="text-white text-[14px]">2009.Action.Crime.Thriller</span><br/>
                            <button onClick={handleAddToFavourite} type="button" className="mt-5 bg-[#95B2EF] text-[14px] px-5 py-2 rounded-[3px] transition ease all active:scale-x-95"><i className="fa-regular fa-heart"></i> Add to Favourites</button>
                        </div>
                    </div>
                    <div className=
                    "h-[500px] bg-cover w-full flex items-end bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:opacity-85 before:z-[-5] max-h-[32rem] relative overflow-hidden z-10 px-10 pb-16" 
                    style={{"background-image": 'url(' + heroImage + ')'}}>
                        <div className='text-start'>
                            <button disabled type="button" className="bg-white px-5 py-1.5 rounded-[20px] font-medium text-[14px]">1hr 12min</button>
                            <p className="mt-4 pb-0 text-white text-[30px] font-medium uppercase">fast and furious</p>
                            <span className="text-white text-[14px]">2009.Action.Crime.Thriller</span><br/>
                            <button onClick={handleAddToFavourite} type="button" className="mt-5 bg-[#95B2EF] text-[14px] px-5 py-2 rounded-[3px] transition ease all active:scale-x-95"><i className="fa-regular fa-heart"></i> Add to Favourites</button>
                        </div>
                    </div>
                </Carousel>
            </div>
            {/* <!-- Trending section starts here --> */}
            <TrendingMovies/>
        </>
    );
};