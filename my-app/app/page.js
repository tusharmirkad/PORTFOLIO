'use client'
import Navbar from "./components/Navbar";
import Header from './components/Header' ;
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false) ;

  useEffect(() => {
    if (typeof window !== 'undefined') {  // Ensure code runs only on the client side
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);


  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
