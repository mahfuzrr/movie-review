import avatar from '../../assets/avatar.png';
import useAuthCheck from '../hooks/useAuthCheck';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useId, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../../assets/default.png';

export default function MovieDetails(){
    const [data, setData] = useState({});
    const [readMore, setReadMore] = useState(false);
    const [description, setDescription] = useState('');
    const [favouriteData, setFavouriteData] = useState([]);

    const {id} = useParams();
    const uuId = useId();
    const auth = useAuthCheck();

    useEffect(() => {
        let api = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${id}`;
        const custom_api = `https://review-server-one.vercel.app/review-api/${id}`;
        if(id <= 12)api = custom_api;
        fetch(api).then((res) => {
            res.json().then((result) => {
                setData(result);
                setDescription(result?.description?.slice(0, 310) || result?.Plot?.slice(0, 310));
            })
        })
    }, [id]);

    useEffect(() => {
        let favData = localStorage.getItem('fav-movie');
        if(favData){
            favData = JSON.parse(favData);
            setFavouriteData([...favData]);
        }
        
    }, []);

    const isInFavList = (fav={}) => {
        for(let i=0; i<favouriteData?.length; i++){
            if(fav?.name){
                if(fav?.name === favouriteData[i]?.name || fav?.name === favouriteData[i]?.Title)return true;
            }
            else if(fav?.Title){
                if(fav?.Title === favouriteData[i]?.Title || fav?.Title === favouriteData[i]?.name)return true;
            }
        }
        return false;
    }

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
    
    const setDescriptionFunc = () => {
        if(!readMore){
            setDescription(data?.description || data?.Plot);
        }
        else{
            setDescription(description?.slice(0, 310));
        }
        setReadMore(!readMore);
    }

    return(
        <div className='min-h-screen'>
        <Toaster/>
            <div className="w-4/5 mt-8 ml-auto mr-auto md:flex">
                <div className="md:flex md:w-9/12">
                    <div className="md:w-1/3">
                        <img className="w-[245px] border border-white rounded-md" src={data?.Poster || data?.thumbnail || defaultImage} alt="thumbnail"/>
                    </div>
                    <div className="text-white md:w-2/3">
                        <p className="text-[35px] font-medium">{data?.Title || data?.name}</p>
                        <div className="text-[12px]">
                            {data?.Genre?.split(",")?.map((gnre, index) => <button key={index + uuId} type="button" disabled className="bg-[#393939] rounded-[20px] px-4 py-1 mr-2">{gnre}</button>)}
                        </div>
                        <p className="mt-2 text-[#95B2EF] text-[14px]">Release Date <span className="text-[white]">{data?.release_date || data?.Year}</span></p>
                        <p className="text-[#95B2EF] text-[14px]">Box Office <span className="text-[white]">{data?.BoxOffice}</span></p>

                        <p className="mt-4 md:md-8 text-justify text-[15px]">
                            {description}
                            <br/>
                            <button onClick={setDescriptionFunc} className="text-[#95B2EF] text-[14px] mt-3 border-none hover:underline active:scale-x-95">Read {readMore ? "Less" : "More"} {!readMore ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}</button>
                        </p>
                        <button disabled type="button" className="mt-4 bg-white text-black px-5 py-1.5 rounded-[20px] font-['Poppins'] font-medium text-[14px]">{data?.length || data?.Runtime}</button><br/>
                        <button onClick={() => handleAddToFavourite(data)} type="button" className="mt-3 bg-[#95B2EF] font-['Poppins'] text-black text-[14px] px-5 py-2 rounded-[3px] transition ease all active:scale-x-95"> {isInFavList(data) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>} Add to Favourites</button>
                    </div>
                </div>
                <div className="md:w-3/12 flex justify-end mt-8 md:mt-0 md:ml-10">
                    <div className="w-full">
                        <p className="h-[1px] bg-white rounded-[2px]"></p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[#95B2EF] text-[16px] font-medium p-0 m-0">Director</p>
                                <span className="text-white text-[12px]">{data?.director || data?.Director?.split(",")[0]}</span>
                            </div>
                            <p>
                                <i className="fa-solid fa-chevron-right text-white text-[11px]"></i>
                            </p>
                        </div>
                        <p className="h-[1px] bg-white rounded-[2px] mt-2"></p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[#95B2EF] text-[16px] font-medium p-0 m-0">Writers</p>
                                <span className="text-white text-[12px]">{data?.Writer || data?.writer}</span>
                            </div>
                            <p>
                                <i className="fa-solid fa-chevron-right text-white text-[11px]"></i>
                            </p>
                        </div>
                        <p className="h-[1px] bg-white rounded-[2px] mt-2"></p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[#95B2EF] text-[16px] font-medium p-0 m-0">Cast</p>
                                <span className="text-white text-[12px]">{data?.Actors || data?.cast?.map((cast) => `${cast?.name}.`)}</span>
                            </div>
                            <p>
                                <i className="fa-solid fa-chevron-right text-white text-[11px]"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-4/5 mt-12 ml-auto mr-auto">
                <p className="text-white font-medium text-[20px]">Top Cast</p>
                <div className="mt-6 grid grid-cols-4 gap-7">
                    {data?.Actors ? data?.Actors?.split(",")?.map((dName, index) => <div key={uuId + index} className="flex items-center">
                            <img className="border border-white rounded-full mr-4 w-12" src={avatar} alt="Avatar"/>
                            <p className="text-white text-[14px]">{dName}</p>
                    </div>) : data?.cast?.map((cast, index) => (<div key={uuId + index} className="flex items-center">
                            <img className="border border-white rounded-full mr-4 h-12 w-12" src={cast?.image} alt="Avatar"/>
                            <p className="text-white text-[14px]">{cast?.name}</p>
                    </div>))}
                </div>
            </div>
        </div>
    );
};