
import './App.css';
import First from './first';
import Second from './sec';
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<First/>}/>
    <Route path='/sec' element={<Second/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
