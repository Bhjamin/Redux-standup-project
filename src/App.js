import Header from './Components/Header';
import Details from './Components/Details';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/details' element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
