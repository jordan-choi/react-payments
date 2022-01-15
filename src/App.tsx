import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardListPage from './pages/CardListPage/CardListPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardListPage />} />
        <Route path='/register-card' element={<CardRegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;