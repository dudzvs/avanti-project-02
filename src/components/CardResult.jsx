const CardResult = ({ userImage, userName, userBio }) => {
    return (
        <div className="flex gap-4 items-center">
            <div className="w-[220px] h-[220px] flex items-center">
                <img src={userImage} alt="user image" className="rounded-full" />
            </div>
            <div>
                <h2 className="text-xl text-blue-700 font-bold">{userName}</h2>
                <p className="text-[15px] max-w-lg">{userBio}</p>
            </div>
        </div>
    );
};

export default CardResult;
