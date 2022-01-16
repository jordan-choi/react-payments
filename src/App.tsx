import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardListPage from './pages/CardListPage/CardListPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';
import NotFoundPage from './pages/NotFoundPage';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardListPage />} />
        <Route path='/register-card/*' element={<CardRegisterPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;