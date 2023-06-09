import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Hotels from './Pages/HotelsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/Hotels' element={<Hotels />}/>
      </Routes>
    </div>
  );
}

export default App;
