import {
BrowserRouter,
Routes,
Route,
} from 'react-router-dom';
import Home from '../src/components/Home';
import Number from '../src/components/Number';
import Word from '../src/components/Word';
import Color from '../src/components/Color';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>router practice</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/:num" element={<Number />} />
          <Route path="/:word" element={<Word />} />
          <Route path='/:str/:textColor/:bgColor' element={<Color/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
