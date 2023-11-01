import { MouseEvent, useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Artigos from "./components/Artigos";
import Contactos from "./components/Contactos";

function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("home");

  const handleView = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    console.log(target.innerText);
    setView(target.innerText.toLowerCase());
  };

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }

  return (
    <>
      <Nav handleView={handleView} />
      <main>
        {view === "início" && <Home />}
        {view === "artigos" && <Artigos />}
        {view === "contactos" && <Contactos />}
      </main>
    </>
  );
}

export default App;
