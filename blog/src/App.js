import './App.css';
import Blog from './components/blog';
import Pokemon from './components/pokemon';
import MarioRabbids from './components/mariorabbids';
import ReactDom from 'react-dom/client';
import {Browser, Routes, Route, BrowserRouter} from 'react-router-dom';

/*function App() {
  return (
    <div className="App">
      <Blog/>
    </div>
  );
}*/

function App() {
  return (
      <Routes>
            <Route path='/' element={<Blog/>}/>
            <Route path='Pokemon' element={<Pokemon/>}/>
            <Route path='Mario + Rabbids' element={<MarioRabbids/>}/>
      </Routes>
  );
}

export default App;
