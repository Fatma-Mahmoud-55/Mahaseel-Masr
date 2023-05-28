import logo from './logo.svg';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Header } from './components/Header/Header';


function App() {
  return (
    <>
    <div>

    <Header/>

        <div className='container'>
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
      </Routes>
    </div>
    </div>
    </>
  );
}

export default App;
