export default function Profile(){

    return(
        <div className="w-4/5 mt-4 ml-auto mr-auto">
            <div style={{"background-image": "url('./bg.png');"}} className="px-4 pb-4 rounded-[5px]">
                <div className="flex items-end h-32">
                    <img className="w-20 mr-2 rounded-sm" src="./avatar.png" alt="my-avatar"/>
                    <div>
                        <p className="text-[18px] font-medium">Mahfuzur Rahman</p>
                        <p className="text-[13px]">Fav Genre: Crime</p>
                    </div>
                </div>
            </div>
            {/* <!-- fav movie table --> */}
            <div className="mt-8 border border-[#454545] rounded-tl-[5px] rounded-tr-[5px]">
                <div className="flex items-center justify-between px-3 py-4">
                <p className="text-[#95B2EF] text-[16px] font-medium">List of Favourite Movies</p>
                <div className="relative flex justify-end w-2/4">
                        <input className="font-['Poppins'] text-[14px] w-1/2 border border-white bg-[#303441] px-4 py-2 rounded-[3px] focus:outline-none text-white" type="text" placeholder="Search movie in your profile"/>
                        <span className="absolute right-4 top-2"><i className="fa-solid fa-magnifying-glass text-white"></i></span>
                    </div>
                </div>
                {/* <!-- single fav movie row --> */}
                <div className="flex items-center justify-between border border-[#454545] px-1 py-1">
                    <div className="cursor-pointer select-none">
                        <img className="w-12" src="./Rectangle 42.png" alt="fav-movie"/>
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
                        <img className="w-12" src="./Rectangle 42.png" alt="fav-movie"/>
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
                        <img className="w-12" src="./Rectangle 42.png" alt="fav-movie"/>
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
                        <img className="w-12" src="./Rectangle 42.png" alt="fav-movie"/>
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
                        <img className="w-12" src="./Rectangle 42.png" alt="fav-movie"/>
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
                        <img className="w-12" src="./Rectangle 42.png" alt="fav-movie"/>
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