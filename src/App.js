import React, { useState, useEffect } from "react"
import "./styles.scss";
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <section className="parallax">
      <div
        className="parallax_background"
        // style={{ transform: `translateY(${offsetY = 0.5}px)` }}>
        >
        <Header />
        <Main />
      </div>
    </section>
  );
}

export default App;
