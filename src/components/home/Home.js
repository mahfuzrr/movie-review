export default function Home(){

    return(
        <>
            {/* <!-- here section starts here --> */}
            <div className="w-4/5 mt-4 ml-auto mr-auto">
                <div className=
                "bg-[url('./image 2.png')] h-[500px] bg-cover w-full flex items-end bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:opacity-85 before:z-[-5] max-h-[32rem] relative overflow-hidden z-10 px-10 pb-16" 
                style={{"background-image": "url('./image 2.png');"}}>
                    <div>
                        <button type="button" className="bg-white px-5 py-1.5 rounded-[20px] font-['Poppins'] font-medium text-[14px]">1hr 12min</button>
                        <p className="mt-4 pb-0 text-white font-['Poppins'] text-[30px] font-medium uppercase">fast and furious</p>
                        <span className="text-white text-[14px]">2009.Action.Crime.Thriller</span><br/>
                        <button type="button" className="mt-5 bg-[#95B2EF] font-['Poppins'] text-[14px] px-5 py-2 rounded-[3px] transition ease all active:scale-x-95"><i className="fa-regular fa-heart"></i> Add to Favourites</button>
                    </div>
                </div>
            </div>
            {/* <!-- Trending section starts here --> */}
            <div className="w-4/5 mt-4 ml-auto mr-auto">
                <div>
                    <p className="font-['Poppins'] text-[18px] font-medium text-white">Trending</p>
                </div>
                {/* <!-- all trending  --> */}
                <div className="mt-5 flex flex-wrap gap-7">
                    {/* <!-- single trending  --> */}
                    <div>
                        <img className="w-44 border border-white rounded-md" src="./Rectangle 42.png" alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                    </div>
                    {/* <!-- single trending  --> */}
                    <div>
                        <img className="w-44 border border-white rounded-md" src="./Rectangle 42.png" alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                    </div>
                    {/* <!-- single trending  --> */}
                    <div>
                        <img className="w-44 border border-white rounded-md" src="./Rectangle 42.png" alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                    </div>
                    {/* <!-- single trending  --> */}
                    <div>
                        <img className="w-44 border border-white rounded-md" src="./Rectangle 42.png" alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                    </div>
                    {/* <!-- single trending  --> */}
                    <div>
                        <img className="w-44 border border-white rounded-md" src="./Rectangle 42.png" alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                    </div>
                    {/* <!-- single trending  --> */}
                    <div>
                        <img className="w-44 border border-white rounded-md" src="./Rectangle 42.png" alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                    </div>
                    {/* <!-- single trending  --> */}
                    <div>
                        <img className="w-44 border border-white rounded-md" src="./Rectangle 42.png" alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                    </div>
                    {/* <!-- single trending  --> */}
                    <div>
                        <img className="w-44 border border-white rounded-md" src="./Rectangle 42.png" alt="trending"/>
                        <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                        <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                    </div>
                </div>
            </div>
        </>
    );
};