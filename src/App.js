import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ProfilePage from './pages/ProfilePage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/movie/:id' element={<DetailsPage/>} />
            <Route path='/my-profile' element={<ProfilePage/>} />
            <Route path='/register' element={<RegistrationPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
