import Layout from './components/Layout.jsx';
import SearchBar from './components/SearchBar.jsx';
import githubIcon from './assets/github-icon.svg';
import { useState } from 'react';
import CardResult from './components/CardResult.jsx';

function App() {
    const [searchedUsername, setSearchedUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    function handleInputChange(e) {
        setSearchedUsername(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setHasSearched(true);

        try {
            const response = await fetch(`https://api.github.com/users/${searchedUsername}`);

            if (response.status === 404) {
                throw new Error('Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente');
            }

            const data = await response.json();
            console.log(data);
            setUserData(data);
        } catch (e) {
            setUserData(null);
            setError(e.message);
        }
    }

    return (
        <>
            <Layout hasSearched={hasSearched}>
                <img src={githubIcon} alt="Github Logo" />
                <h1 className="font-medium text-2xl text-nowrap sm:text-4xl md:text-5xl lg:text-6xl">
                    Perfil <span className="font-bold">GitHub</span>
                </h1>
                <SearchBar onChange={handleInputChange} onSubmit={handleSubmit} value={searchedUsername} />
                {userData?.login ? (
                    <CardResult
                        userName={userData.name}
                        userImage={userData.avatar_url}
                        userBio={userData.bio || 'No bio'}
                    />
                ) : (
                    error && (
                        <div className="text-center flex justify-center items-center w-full">
                            <p className="text-red-500 max-w-lg text-lg">{error}</p>
                        </div>
                    )
                )}
            </Layout>
        </>
    );
}

export default App;
