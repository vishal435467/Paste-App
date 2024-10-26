import { createBrowserRouter } from 'react-router-dom';
import {RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste  from './components/ViewPaste';
import './App.css'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
  ]
);

function App() {


  return (
    <>
      <RouterProvider router ={router} />
    </>
  )
}

export default App
