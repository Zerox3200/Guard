import { lazy, Suspense } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import("./pages/Home/Home"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
}

export default App;
