import { useNavigate } from 'react-router-dom';
import defaultImage from '../../assets/default-img.png';

export default function TrendingMovies(){
    const navigate = useNavigate();

    return(
        <div className="w-4/5 mt-4 ml-auto mr-auto">
            <div>
                <p className="font-['Poppins'] text-[18px] font-medium text-white">Trending</p>
            </div>
                {/* <!-- all trending  --> */}
            <div className="mt-5 flex flex-wrap gap-7">
                {/* <!-- single trending  --> */}
                <div className='cursor-pointer' onClick={() => navigate('/movie/1')}>
                    <img className="w-44 border border-white rounded-md" src={defaultImage} alt="trending"/>
                    <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                    <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                </div>
                {/* <!-- single trending  --> */}
                <div className='cursor-pointer' onClick={() => navigate('/movie/1')}>
                    <img className="w-44 border border-white rounded-md" src={defaultImage} alt="trending"/>
                    <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                    <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                </div>
                {/* <!-- single trending  --> */}
                <div className='cursor-pointer' onClick={() => navigate('/movie/1')}>
                    <img className="w-44 border border-white rounded-md" src={defaultImage} alt="trending"/>
                    <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                    <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                </div>
                {/* <!-- single trending  --> */}
                <div className='cursor-pointer' onClick={() => navigate('/movie/1')}>
                    <img className="w-44 border border-white rounded-md" src={defaultImage} alt="trending"/>
                    <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                    <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                </div>
                {/* <!-- single trending  --> */}
                <div className='cursor-pointer' onClick={() => navigate('/movie/1')}>
                    <img className="w-44 border border-white rounded-md" src={defaultImage} alt="trending"/>
                    <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                    <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                </div>
                {/* <!-- single trending  --> */}
                <div className='cursor-pointer' onClick={() => navigate('/movie/1')}>
                    <img className="w-44 border border-white rounded-md" src={defaultImage} alt="trending"/>
                    <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                    <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                </div>
                {/* <!-- single trending  --> */}
                <div className='cursor-pointer' onClick={() => navigate('/movie/1')}>
                    <img className="w-44 border border-white rounded-md" src={defaultImage} alt="trending"/>
                    <p className="text-white text-[16px] font-medium mt-2 mb-0 pb-0 font-['Poppins']">Outsider</p>
                    <span className="text-white text-[12px] m-0 p-0 font-['Poppins']">Jan 28, 2022</span>
                </div>
            </div>
        </div>
    );
};