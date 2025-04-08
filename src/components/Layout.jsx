const Layout = ({ children, userExists }) => {
    return (
        <div className="bg-[#1F1F1F] h-screen flex items-center justify-center">
            <div className="bg-black w-full md:w-[65%] h-[60%] flex flex-col items-center p-10 gap-10 text-white">
                <div className="flex items-center gap-3 mt-6">
                    {children[0]} {/* title and icon */}
                    {children[1]}
                </div>
                <div className="flex justify-center w-full ">
                    {children[2]} {/* seachBar */}
                </div>

                {userExists && (
                    <div className="w-[50%] flex px-10 rounded-3xl bg-[#D9D9D9] text-black h-[257px]">
                        {children[3]} {/* result */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Layout;
