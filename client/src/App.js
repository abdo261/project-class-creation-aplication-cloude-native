import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import { Homeroute } from './pages/home/routes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
       {Homeroute}
      </Route>
    </Routes>
  );
}

export default App;
