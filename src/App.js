import './App.scss';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import { DarkModeContext } from './context/DarkModeContext';
import { useContext } from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        
        <div style={{display: "flex"}}>
          <LeftBar />

          <div style={{flex: 6}}>
            <Outlet />
          </div>

          <RightBar />
        </div>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;