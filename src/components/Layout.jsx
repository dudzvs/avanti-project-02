import bgDetail from '../assets/detail.svg'

const Layout = ({ children, hasSearched }) => {
    return (
        <div className="bg-[#1F1F1F] h-screen flex items-center justify-center relative z-0">
            <div className="absolute right-[-50px] top-0 w-96 h-80 bg-blue-700 opacity-70 rounded-full blur-[100px]"></div>
            <div className="absolute left-[-50px] bottom-0 w-96 h-80 bg-blue-700 opacity-70 rounded-full blur-[100px]"></div>

            <div className="bg-black w-full md:w-[65%] h-[100%] md:h-[737px] flex flex-col items-center absolute p-10 gap-10 text-white">
                <div>
                    <img src={bgDetail} className="absolute left-[-120px] top-[-90px] z-[-1]"/>
                </div>
                <div className="flex items-center gap-3 mt-6">
                    {children[0]} {/* title and icon */}
                    {children[1]}
                </div>
                <div className="flex justify-center w-full ">
                    {children[2]} {/* seachBar */}
                </div>
                <div
                    className={`w-[100%] md:w-[50%]  flex p-10 rounded-3xl bg-[#D9D9D9] justify-center md:justify-start text-black ${hasSearched ? 'visible' : 'invisible'}`}
                >
                    {children[3]} {/* result */}
                </div>
            </div>
        </div>
    );
};

export default Layout;
