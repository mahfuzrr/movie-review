export default function MovieDetails(){

    return(
        <>
            <div class="w-4/5 mt-8 ml-auto mr-auto flex">
                <div class="flex w-9/12">
                    <div class="w-full">
                        <img class="w-64 border border-white rounded-md" src="./Group 1.png" alt="thumbnail"/>
                    </div>
                    <div class="text-white md:ml-8">
                        <p class="text-[35px] font-medium">Tiistiy Mistity</p>
                        <div class="text-[12px]">
                            <button type="button" disabled class="bg-[#393939] rounded-[20px] px-4 py-1 mr-2">Action</button>
                            <button type="button" disabled class="bg-[#393939] rounded-[20px] px-4 py-1 mr-2">Crime</button>
                        </div>
                        <p class="mt-2 text-[#95B2EF] text-[14px]">Release Date <span class="text-[white]">25 May 2019</span></p>
                        <p class="mt-6 md:md-8 text-justify text-[15px]">
                            Brian O'Conner, back working for the FBI in Los Angeles, teams up with
                            Dominic Toretto to bring down a heroin importer by infiltrating his operation. Brian O'Conner,
                            back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer 
                            by infiltrating his operation ...
                            <br/>
                            <button class="text-[#95B2EF] text-[14px] mt-3 border-none hover:underline active:scale-x-95">Read More <i class="fa-solid fa-chevron-down"></i></button>
                        </p>
                        <button disabled type="button" class="mt-4 bg-white text-black px-5 py-1.5 rounded-[20px] font-['Poppins'] font-medium text-[14px]">1hr 12min</button><br/>
                        <button type="button" class="mt-3 bg-[#95B2EF] font-['Poppins'] text-black text-[14px] px-5 py-2 rounded-[3px] transition ease all active:scale-x-95"><i class="fa-regular fa-heart"></i> Add to Favourites</button>
                    </div>
                </div>
                <div class="w-3/12 flex justify-end ml-10">
                    <div class="w-full">
                        <p class="h-[1px] bg-white rounded-[2px]"></p>
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-[#95B2EF] text-[16px] font-medium p-0 m-0">Director</p>
                                <span class="text-white text-[12px]">James Gunn</span>
                            </div>
                            <p>
                                <i class="fa-solid fa-chevron-right text-white text-[11px]"></i>
                            </p>
                        </div>
                        <p class="h-[1px] bg-white rounded-[2px] mt-2"></p>
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-[#95B2EF] text-[16px] font-medium p-0 m-0">Writers</p>
                                <span class="text-white text-[12px]">James Gunn</span>
                            </div>
                            <p>
                                <i class="fa-solid fa-chevron-right text-white text-[11px]"></i>
                            </p>
                        </div>
                        <p class="h-[1px] bg-white rounded-[2px] mt-2"></p>
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-[#95B2EF] text-[16px] font-medium p-0 m-0">Cast</p>
                                <span class="text-white text-[12px]">James Gunn</span>
                            </div>
                            <p>
                                <i class="fa-solid fa-chevron-right text-white text-[11px]"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-4/5 mt-12 ml-auto mr-auto">
                <p class="text-white font-medium text-[20px]">Top Cast</p>
                <div class="mt-6 grid grid-cols-4 gap-7">
                    <div class="flex items-center">
                            <img class="border border-white rounded-full mr-4 w-12" src="./Avatar 2.png" alt="Avatar"/>
                            <p class="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div class="flex items-center">
                            <img class="border border-white rounded-full mr-4 w-12" src="./Avatar 2.png" alt="Avatar"/>
                            <p class="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div class="flex items-center">
                            <img class="border border-white rounded-full mr-4 w-12" src="./Avatar 2.png" alt="Avatar"/>
                            <p class="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div class="flex items-center">
                            <img class="border border-white rounded-full mr-4 w-12" src="./Avatar 2.png" alt="Avatar"/>
                            <p class="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div class="flex items-center">
                            <img class="border border-white rounded-full mr-4 w-12" src="./Avatar 2.png" alt="Avatar"/>
                            <p class="text-white text-[14px]">Vin Disel</p>
                    </div>
                    <div class="flex items-center">
                            <img class="border border-white rounded-full mr-4 w-12" src="./Avatar 2.png" alt="Avatar"/>
                            <p class="text-white text-[14px]">Vin Disel</p>
                    </div>
                </div>
            </div>
        </>
    );
};