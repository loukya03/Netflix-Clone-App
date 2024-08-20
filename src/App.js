import './App.css';
import LoginHeader from './Components/Login header/LoginHeader';
import LoginForm from './Components/Login form/LoginForm';
import { Route, Routes } from 'react-router-dom';
import TVShows from './Components/TV shows/TVShows';
import Movies from './Components/Movies/Movies';
import NewAndPopular from './Components/New and popular/NewAndPopular';
import MyList from './Components/My List/MyList';
import BrowseByLang from './Components/Browse by language/BrowseByLang';
import ShowsGrid from './Components/Shows Grid/ShowsGrid';
import GetStarted from './Components/Get Started/GetStarted';
import HomePage from './Components/Home Page/HomePage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LoginHeader />}></Route>
        <Route path='/form' element={<LoginForm />}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/tvshows' element={<TVShows/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/newandpopular' element={<NewAndPopular/>}></Route>
        <Route path='/mylist' element={<MyList/>}></Route>
        <Route path='/browsebylanguage' element={<BrowseByLang/>}></Route>
        <Route path='/showsgrid' element={<ShowsGrid/>}></Route>
        <Route path='/getstarted' element={<GetStarted/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
