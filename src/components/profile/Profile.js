import profileBackground from '../../assets/profile-bg.png';
import avatar from '../../assets/avatar.png';
import { useEffect, useState } from 'react';

export default function Profile(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [searchVal, setSearchVal] = useState('');
    const [favouriteData, setFavouriteData] = useState([]);
    const [tableFavData, setTableFavData] = useState([]);

    useEffect(() => {
        let auth = localStorage?.getItem('movie-review-auth');
        if(auth)auth = JSON.parse(auth);
        setName(auth?.name);
        setEmail(auth?.email);
    }, []);

    useEffect(() => {
        let fav = localStorage.getItem('fav-movie');
        if(fav){
            fav = JSON.parse(fav);
            setFavouriteData(fav)
            setTableFavData(fav);
        }
    }, []);

    const handleRemoveFav = (fav={}) => {
        const updatedFav = tableFavData.filter((d) => d?.id !== fav?.id || d?.imdbID !== fav?.imdbID);
        const updatedSearchFav = favouriteData.filter((d) => d?.id !== fav?.id || d?.imdbID !== fav?.imdbID);
        setFavouriteData(updatedSearchFav);
        setTableFavData(updatedFav);
        localStorage.removeItem('fav-movie');
        localStorage.setItem('fav-movie', JSON.stringify(updatedFav));
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            const sVal = searchVal?.toLowerCase();
            const filterSearch = tableFavData?.filter((d) => d?.name?.toLowerCase()?.includes(sVal) || d?.Title?.toLowerCase()?.includes(sVal));
            setFavouriteData(filterSearch);
        }, 100);
        return () => clearTimeout(timeout);
    }, [searchVal, tableFavData]);


    return(
        <div className="w-4/5 mt-4 ml-auto mr-auto min-h-screen">
            <div style={{"background-image": 'url(' + profileBackground + ')'}} className="px-4 pb-4 rounded-[5px]">
                <div className="flex items-end h-32">
                    <img className="w-20 mr-2 rounded-sm" src={avatar} alt="my-avatar"/>
                    <div>
                        <p className="text-[18px] font-medium">{name}</p>
                        <p className="text-[13px]">{email}</p>
                    </div>
                </div>
            </div>
            {/* <!-- fav movie table --> */}
            <div className="mt-8 border border-[#454545] rounded-tl-[5px] rounded-tr-[5px]">
                <div className="flex items-center justify-between px-3 py-4">
                <p className="text-[#95B2EF] text-[16px] font-medium">List of Favourite Movies</p>
                <div className="relative flex justify-end w-2/4">
                        <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className="font-['Poppins'] text-[14px] w-1/2 border border-white bg-[#303441] px-4 py-2 rounded-[3px] focus:outline-none text-white" type="text" placeholder="Search movie in your profile"/>
                        <span className="absolute right-4 top-2"><i className="fa-solid fa-magnifying-glass text-white"></i></span>
                    </div>
                </div>
                {/* <!-- single fav movie row --> */}

                {favouriteData?.map((data) =>  <div key={data?.id || data?.imdbID} className="flex items-center justify-between border border-[#454545] px-1 py-1">
                    <div className="cursor-pointer select-none">
                        <img className="w-12" src={data?.Poster || data?.thumbnail} alt="fav-movie"/>
                    </div>
                    <div className="cursor-pointer select-none">
                        <p className="text-white text-[13px]">{data?.name || data?.Title}</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">{data?.category ? data?.category?.toString() : data?.Genre}</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">{data?.release_data || data?.Released}</p>
                    </div>
                    <div className="pr-5">
                        <button onClick={() => handleRemoveFav(data)} className="border-none text-white active:scale-x-95" type="button"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>)}
                
            </div>
    </div>
    );
};