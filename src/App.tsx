import React, { useState } from 'react';
import { Header } from './components/Header';
import { SidebarMenu } from './components/SidebarMenu';

function App() {
  const [isShown, setIsShown] = useState(false);
  const [isSubmenuShown, setIsSubmenuShown] = useState(false);

  return (
    <div className="App">
      <Header setIsShown={setIsShown} />
      <SidebarMenu
        isShown={isShown}
        setIsShown={setIsShown}
        isSubmenuShown={isSubmenuShown}
        setIsSubmenuShown={setIsSubmenuShown}
      />
    </div>
  );
}

export default App;
