import Layout from './components/Layout.jsx';
import SearchBar from './components/SearchBar.jsx';
import githubIcon from './assets/github-icon.svg';
import { useState } from 'react';
import CardResult from './components/CardResult.jsx';

function App() {
    const [searchedUsername, setSearchedUsername] = useState('');
    const [userData, setUserData] = useState(null);

    function handleInputChange(e) {
        setSearchedUsername(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const token = import.meta.env.VITE_GITHUB_TOKEN;

        try {
            const response = await fetch(`https://api.github.com/users/${searchedUsername}`, {
                headers: {
                    Accept: 'application/vnd.github.v3+json',
                    authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 404) {
                throw new Error('Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente');
            }

            const data = await response.json();
            console.log(data);
            setUserData(data);
        } catch (e) {
            console.log(e.message);
            setUserData(null);
        }
    }

    return (
        <>
            <Layout userExists={userData && userData.login ? true : false}>
                <img src={githubIcon} alt="Github Logo" />
                <h1 className="font-medium text-2xl text-nowrap sm:text-4xl md:text-5xl lg:text-6xl">
                    Perfil <span className="font-bold">GitHub</span>
                </h1>
                <SearchBar onChange={handleInputChange} onSubmit={handleSubmit} value={searchedUsername} />
                {userData && userData.login && (
                    <>
                        <CardResult
                            userName={userData.name}
                            userImage={userData.avatar_url}
                            userBio={userData.bio || 'No bio'}
                        />
                    </>
                )}
            </Layout>
        </>
    );
}

export default App;
