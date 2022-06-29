import {
BrowserRouter,
Routes,
Route,
NavLink } from 'react-router-dom';
import Home from '../src/components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>router practice</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
