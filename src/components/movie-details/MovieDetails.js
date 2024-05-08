import detailsImage from '../../assets/details-img.png';
import avatar from '../../assets/avatar.png';
import useAuthCheck from '../hooks/useAuthCheck';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export default function MovieDetails(){
    const val = `Brian O'Conner, back working for the FBI in Los Angeles, teams up with
    Dominic Toretto to bring down a heroin importer by infiltrating his operation. Brian O'Conner,
    back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer 
    by infiltrating his operation ...`;

    const [readMore, setReadMore] = useState(false);
    const [description, setDescription] = useState(val);
    const auth = useAuthCheck();
    const handleAddToFavourite = () => {
        if(auth){
            // add to favourite
        }
        else{
            toast.error("Please Register!", {
                position: 'top-right',
                duration: '1000',
                id: 'details-add-fav'
            });
        }
    }
    
    const setDescriptionFunc = () => {
        if(val?.length > 20 && !readMore){
            setDescription(description?.slice(0, 20));
        }
        else{
            setDescription(val);
        }
        setReadMore(!readMore);
    }

    return(
        <>
        <Toaster/>
            <div className="w-4/5 mt-8 ml-auto mr-auto md:flex">
                <div className="md:flex md:w-9/12">
                    <div className="md:w-1/3">
                        <img className="w-[245px] border border-white rounded-md" src={detailsImage} alt="thumbnail"/>
                    </div>
                    <div className="text-white md:w-2/3">
                        <p className="text-[35px] font-medium">Tiistiy Mistity</p>
                        <div className="text-[12px]">
                            <button type="button" disabled className="bg-[#393939] rounded-[20px] px-4 py-1 mr-2">Action</button>
                            <button type="button" disabled className="bg-[#393939] rounded-[20px] px-4 py-1 mr-2">Crime</button>
                        </div>
                        <p className="mt-2 text-[#95B2EF] text-[14px]">Release Date <span className="text-[white]">25 May 2019</span></p>
                        <p className="text-[#95B2EF] text-[14px]">Budget <span className="text-[white]">300k</span></p>

                        <p className="mt-4 md:md-8 text-justify text-[15px]">
                            {description}
                            <br/>
                            <button onClick={setDescriptionFunc} className="text-[#95B2EF] text-[14px] mt-3 border-none hover:underline active:scale-x-95">Read More <i className="fa-solid fa-chevron-down"></i></button>
                        </p>
                        <button disabled type="button" className="mt-4 bg-white text-black px-5 py-1.5 rounded-[20px] font-['Poppins'] font-medium text-[14px]">1hr 12min</button><br/>
                        <button onClick={handleAddToFavourite} type="button" className="mt-3 bg-[#95B2EF] font-['Poppins'] text-black text-[14px] px-5 py-2 rounded-[3px] transition ease all active:scale-x-95"><i className="fa-regular fa-heart"></i> Add to Favourites</button>
                    </div>
                </div>
                <div className="md:w-3/12 flex justify-end mt-8 md:mt-0 md:ml-10">
                    <div className="w-full">
                        <p className="h-[1px] bg-white rounded-[2px]"></p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[#95B2EF] text-[16px] font-medium p-0 m-0">Director</p>
                                <span className="text-white text-[12px]">James Gunn</span>
                            </div>
                            <p>
                                <i className="fa-solid fa-chevron-right text-white text-[11px]"></i>
                            </p>
                        </div>
                        <p className="h-[1px] bg-white rounded-[2px] mt-2"></p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[#95B2EF] text-[16px] font-medium p-0 m-0">Writers</p>
                                <span className="text-white text-[12px]">James Gunn</span>
                            </div>
                            <p>
                                <i className="fa-solid fa-chevron-right text-white text-[11px]"></i>
                            </p>
                        </div>
                        <p className="h-[1px] bg-white rounded-[2px] mt-2"></p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[#95B2EF] text-[16px] font-medium p-0 m-0">Cast</p>
                                <span className="text-white text-[12px]">James Gunn</span>
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
                    <div className="flex items-center">
                            <img className="border border-white rounded-full mr-4 w-12" src={avatar} alt="Avatar"/>
                            <p className="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div className="flex items-center">
                            <img className="border border-white rounded-full mr-4 w-12" src={avatar} alt="Avatar"/>
                            <p className="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div className="flex items-center">
                            <img className="border border-white rounded-full mr-4 w-12" src={avatar} alt="Avatar"/>
                            <p className="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div className="flex items-center">
                            <img className="border border-white rounded-full mr-4 w-12" src={avatar} alt="Avatar"/>
                            <p className="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div className="flex items-center">
                            <img className="border border-white rounded-full mr-4 w-12" src={avatar} alt="Avatar"/>
                            <p className="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div className="flex items-center">
                            <img className="border border-white rounded-full mr-4 w-12" src={avatar} alt="Avatar"/>
                            <p className="text-white text-[14px]">Vin Disel</p>
                    </div>
                </div>
            </div>
        </>
    );
};