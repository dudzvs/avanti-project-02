const Layout = ({ children }) => {
    return (
        <div className="bg-[#1F1F1F] h-screen flex items-center justify-center">
            <div className="bg-black w-[70%] h-[65%] flex flex-col items-center p-14 gap-10">
                <div>
                    {children[0]}
                </div>
                <div>
                    {children[1]}
                </div>
            </div>
        </div>

    )
}

export default Layout;