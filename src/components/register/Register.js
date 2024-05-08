import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            pass,
        }
        localStorage.setItem('movie-review-auth', JSON.stringify(formData));
        navigate('/my-profile');
    }

    return(
        <div className="w-4/5 mt-8 ml-auto mr-auto min-h-screen">
            <p className="text-white text-center text-[20px] font-medium">Register a new account !</p>
            <form className="w-2/5 ml-auto mr-auto mt-6" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-white text-[14px]" for="uname">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="text-white text-[15px] px-4 py-2 bg-transparent rounded-[3px] mt-2 border border-[#454545] focus:border-white focus:outline-none" id="uname" type="text" placeholder="Enter your name" required/>
                </div>
                <div className="flex flex-col mt-4">
                    <label for="email" className="text-white text-[14px]">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="text-white text-[15px] px-4 py-2 bg-transparent rounded-[3px] mt-2 border border-[#454545] focus:border-white focus:outline-none" type="email" name="email" id="email" placeholder="Enter your mail" required/>
                </div>
                <div className="flex flex-col mt-4">
                    <label for="pass" className="text-white text-[14px]">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} className="text-white text-[15px] px-4 py-2 bg-transparent rounded-[3px] mt-2 border border-[#454545] focus:border-white focus:outline-none" type="password" id="pass" placeholder="Enter password" required/>
                </div>
                <button type="submit" className="mt-4 bg-[#95B2EF] border-none px-6 py-1.5 text-[14px] font-medium rounded-sm active:scale-x-95">Create</button>
            </form>
        </div>
    );
};