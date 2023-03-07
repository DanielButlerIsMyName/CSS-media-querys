import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import One from './One';
import Two from './Two';
import Three from './Three';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/one' element={<One />} />
          <Route path='/two' element={<Two />} />
          <Route path='/three' element={<Three />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
