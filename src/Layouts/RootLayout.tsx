import Footer from '../Components/Footer'
import "../App.css"
import Header from '../Components/Header'
import { ThemeProvider } from '../Context/Theme'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
  //functionality for theme
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
    document.body.style.backgroundColor = "#000001";
  };

  const darkTheme = () => {
    setThemeMode("dark");
    document.body.style.backgroundColor = "#fff";

  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);






  return (


    <ThemeProvider value={{ themeMode, lightTheme, darkTheme, setThemeMode }}>
      <div className=' relative'>
        <Header   />
        <main className='mx-auto  '>
          <div className='mx-auto dark:text-white  '>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>



  )
}

export default RootLayout
