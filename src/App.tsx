import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardListPage from './pages/CardListPage/CardListPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import PageLayout from './components/PageLayout/PageLayout';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <CardListPage />
            </PageLayout>
          }
        />
        <Route
          path="/register-card/*"
          element={
            <PageLayout>
              <CardRegisterPage />
            </PageLayout>
          }
        />
        <Route
          path="/*"
          element={
            <PageLayout>
              <NotFoundPage />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
