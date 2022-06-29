import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import MealDetail from './components/Meals/MealDetail/MealDetail';
import NotFound from './pages/NotFound';
import CategoryProvider from './store/CategoryProvider';
import AuthForm from './components/Auth/AuthForm';
import { useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <CategoryProvider>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              exact
              element={
                !authCtx.isLoggedIn ? (
                  <Navigate to="/auth" />
                ) : (
                  <Navigate to="/meals" />
                )
              }
            />
            <Route
              path="/meals"
              exact
              element={!authCtx.isLoggedIn ? <AuthForm /> : <Home />}
            />
            <Route path="/auth" exact element={<AuthForm />} />
            <Route
              path="/meals/:id"
              exact
              element={
                !authCtx.isLoggedIn ? <AuthForm /> : <MealDetail />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </CategoryProvider>
  );
}

export default App;
