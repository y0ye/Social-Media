import { Routes, Route } from 'react-router-dom';
import App from './App';
import Signup from './assets/Signup.tsx';
import Login from './assets/Login.tsx';
import AuthHome from './assets/AuthHome.tsx';
import CreatePost from './assets/CreatePost.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/AuthHome" element={<AuthHome />} />
      <Route path="/CreatePost" element={<CreatePost />} />
    </Routes>
  );
};

export default AppRoutes;