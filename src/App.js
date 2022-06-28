import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CategoryProvider from './store/CategoryProvider';

function App() {
  return (
    <CategoryProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CategoryProvider>
  );
}

export default App;
