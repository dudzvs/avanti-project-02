import { Search } from 'lucide-react'

const searchBar = ({ onChange, value }) => {
    return (
        <div className="max-w-lg w-full relative">
            <input
                className="bg-white rounded-lg w-full h-[50px] md:h-[60px] outline-none focus:outline-none text-black p-3 text-sm md:text-xl "
                type="text"
                onChange={onChange}
                value={value}
                name="search"
                id="searchInput"
                placeholder="Digite um usuario do Github"
            />
            <button type='button' className="absolute cursor-pointer flex right-[1px] top-[1px] items-center rounded-lg bg-blue-600 p-[9px] md:p-[14px]"><Search size="30"/></button>
        </div>
    );
};

export default searchBar;
