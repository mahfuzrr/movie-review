import { useNavigate } from "react-router-dom";
import useAuthCheck from "../hooks/useAuthCheck";
import { useState } from "react";

export default function Navbar(){
    const [searchVal, setSearchVal] = useState('');
    const navigate = useNavigate();
    const auth = useAuthCheck();
    return(
        <nav className="bg-[#303441] w-4/5 flex items-center mt-4 ml-auto mr-auto px-6 py-4 rounded-[3px]">
        {/* website logo  */}
        <div className="w-2/5">
            <p onClick={() => navigate('/')} className="text-[18px] font-['Silkscreen'] text-[#95B2EF] uppercase font-semibold cursor-pointer select-none">Movie Hub</p>
        </div>
        {/* <!-- search and profile --> */}
        <div className="w-3/5 flex items-center justify-end">
            {/* <!-- search --> */}
            <div className="relative flex justify-end w-10/12">
                <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className="font-['Poppins'] text-[14px] w-1/2 border border-white bg-[#303441] px-4 py-2 rounded-[3px] focus:outline-none text-white mr-6" type="text" placeholder="Search any movie"/>
                <span className="absolute right-10 top-2"> <i className="fa-solid fa-magnifying-glass text-white"></i></span>
            </div>
            {/* <!-- profile --> */}
            <div>
                {auth ? <button type="button" onClick={() => navigate('/my-profile')} className="rounded-full border-[2px] border-white px-2 py-1 active:scale-x-95"><i className="fa-regular fa-user text-white"></i></button> : 
                 <button type="button" onClick={() => navigate('/register')} className="bg-[#95B2EF] text-[14px] px-5 py-2 rounded-[2px] active:scale-x-95">Register</button>
                }
            </div>
        </div>
    </nav>
    );
};