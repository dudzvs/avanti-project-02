import Layout from './components/Layout.jsx';
import SearchBar from './components/SearchBar.jsx';
import githubIcon from './assets/github-icon.svg';

function App() {
    function handleInputChange() {}

    return (
        <Layout>
            <img src={githubIcon} alt="Github Logo" />
            <h1 className="font-medium text-2xl text-nowrap sm:text-4xl md:text-5xl lg:text-6xl">
                Perfil <span className="font-bold">GitHub</span>
            </h1>
            <SearchBar onChange={handleInputChange} />
        </Layout>
    );
}

export default App;
