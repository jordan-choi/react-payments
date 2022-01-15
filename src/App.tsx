import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import RegisterCard from './pages/RegisterCard/RegisterCard';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register-card' element={<RegisterCard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;