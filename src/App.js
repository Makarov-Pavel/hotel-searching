import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Login' element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
