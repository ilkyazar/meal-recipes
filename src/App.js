import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import MealDetail from './components/Meals/MealDetail/MealDetail';
import NotFound from './pages/NotFound';
import CategoryProvider from './store/CategoryProvider';

function App() {
  return (
    <CategoryProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/meals/:id" exact element={<MealDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </CategoryProvider>
  );
}

export default App;
