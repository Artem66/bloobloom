import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SidebarMenu } from './components/SidebarMenu';
import { SpectaclesMen } from './pages/SpectaclesMen';
import { SunglassesWomen } from './pages/SunglassesWomen';
import { SpectaclesWomen } from './pages/SpectaclesWomen';
import { SunglassesMen } from './pages/SunglassesMen';

function App() {
  const [isShown, setIsShown] = useState(false);
  const [isSubmenuShown, setIsSubmenuShown] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');

  return (
    <div className="App">
      <Header setIsShown={setIsShown} />
      <SidebarMenu
        isShown={isShown}
        setIsShown={setIsShown}
        isSubmenuShown={isSubmenuShown}
        setIsSubmenuShown={setIsSubmenuShown}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <Routes>
        <Route path="/" element={<SpectaclesWomen />} />
        <Route path="/spectacles-women" element={<SpectaclesWomen />} />
        <Route path="/spectacles-men" element={<SpectaclesMen />} />
        <Route path="/sunglasses-women" element={<SunglassesWomen />} />
        <Route path="/sunglasses-men" element={<SunglassesMen />} />
      </Routes>
    </div>
  );
}

export default App;
