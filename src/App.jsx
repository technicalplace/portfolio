import { useEffect, useState } from 'react';
import { Aside } from './component/Aside';
import { Header } from './component/Header';
import { About } from './component/About';
import { Products } from './component/Products';
import { Contact } from './component/Contact';
import './App.css';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    isLoading ? (
      <div className="splash" role="status" aria-label="ホームへ移動中">
        <img
          src="/petra-reid-PNjqynaPaaQ-unsplash.jpg"
          alt="スプラッシュ画面"
        />
        <div className="splashOverlay" />
        <p>FUJI</p>
      </div>
    ) : (
      <>
        <Header />
        <div className="container">
          <Aside />
          <main className="main">
            <About />
            <Products />
            <Contact />
          </main>
        </div>
      </>
    )
  )
}

export default App
