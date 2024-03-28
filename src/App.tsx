import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Upcoming from './Components/Upcoming';
import Services from './Components/Services';



function App() {
 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>

    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
