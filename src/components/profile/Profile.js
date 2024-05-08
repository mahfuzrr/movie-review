import profileBackground from '../../assets/profile-bg.png';
import avatar from '../../assets/avatar.png';
import defaultImage from '../../assets/default-img.png';
import { useEffect, useState } from 'react';

export default function Profile(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [searchVal, setSearchVal] = useState('');

    useEffect(() => {
        let auth = localStorage?.getItem('movie-review-auth');
        if(auth)auth = JSON.parse(auth);
        setName(auth?.name);
        setEmail(auth?.email);
    }, []);
    return(
        <div className="w-4/5 mt-4 ml-auto mr-auto">
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
                <div className="flex items-center justify-between border border-[#454545] px-1 py-1">
                    <div className="cursor-pointer select-none">
                        <img className="w-12" src={defaultImage} alt="fav-movie"/>
                    </div>
                    <div className="cursor-pointer select-none">
                        <p className="text-white text-[13px]">3 idiots</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">Comedy.Education</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">2009</p>
                    </div>
                    <div className="pr-5">
                        <button className="border-none text-white active:scale-x-95" type="button"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>

                {/* <!-- single fav movie row --> */}
                <div className="flex items-center justify-between border border-[#454545] px-1 py-1">
                    <div className="cursor-pointer select-none">
                        <img className="w-12" src={defaultImage} alt="fav-movie"/>
                    </div>
                    <div className="cursor-pointer select-none">
                        <p className="text-white text-[13px]">3 idiots</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">Comedy.Education</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">2009</p>
                    </div>
                    <div className="pr-5">
                        <button className="border-none text-white active:scale-x-95" type="button"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>

                {/* <!-- single fav movie row --> */}
                <div className="flex items-center justify-between border border-[#454545] px-1 py-1">
                    <div className="cursor-pointer select-none">
                        <img className="w-12" src={defaultImage} alt="fav-movie"/>
                    </div>
                    <div className="cursor-pointer select-none">
                        <p className="text-white text-[13px]">3 idiots</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">Comedy.Education</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">2009</p>
                    </div>
                    <div className="pr-5">
                        <button className="border-none text-white active:scale-x-95" type="button"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>

                {/* <!-- single fav movie row --> */}
                <div className="flex items-center justify-between border border-[#454545] px-1 py-1">
                    <div className="cursor-pointer select-none">
                        <img className="w-12" src={defaultImage} alt="fav-movie"/>
                    </div>
                    <div className="cursor-pointer select-none">
                        <p className="text-white text-[13px]">3 idiots</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">Comedy.Education</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">2009</p>
                    </div>
                    <div className="pr-5">
                        <button className="border-none text-white active:scale-x-95" type="button"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>

                {/* <!-- single fav movie row --> */}
                <div className="flex items-center justify-between border border-[#454545] px-1 py-1">
                    <div className="cursor-pointer select-none">
                        <img className="w-12" src={defaultImage} alt="fav-movie"/>
                    </div>
                    <div className="cursor-pointer select-none">
                        <p className="text-white text-[13px]">3 idiots</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">Comedy.Education</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">2009</p>
                    </div>
                    <div className="pr-5">
                        <button className="border-none text-white active:scale-x-95" type="button"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>

                {/* <!-- single fav movie row --> */}
                <div className="flex items-center justify-between border border-[#454545] px-1 py-1">
                    <div className="cursor-pointer select-none">
                        <img className="w-12" src={defaultImage} alt="fav-movie"/>
                    </div>
                    <div className="cursor-pointer select-none">
                        <p className="text-white text-[13px]">3 idiots</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">Comedy.Education</p>
                    </div>
                    <div>
                        <p className="text-white text-[13px]">2009</p>
                    </div>
                    <div className="pr-5">
                        <button className="border-none text-white active:scale-x-95" type="button"><i className="fa-solid fa-heart"></i></button>
                    </div>
                </div>
                
            </div>
    </div>
    );
};