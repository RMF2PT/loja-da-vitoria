import { MouseEvent, useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Contacts from "./components/Contacts";

function App() {
  const API_URL = "http://localhost:3500/products";

  const [products, setProducts] = useState([]);
  const [view, setView] = useState("início");
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const handleView = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    setView(target.innerText.toLowerCase());
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw Error("Failed to load database");
        const data = await res.json();
        setProducts(data);
        setFetchError(null);
      } catch (error) {
        if (error instanceof Error) setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchProducts();
    }, 2000);
  }, []);

  return (
    <>
      <Nav handleView={handleView} />
      <main>
        {view === "início" && <Home />}
        {view === "artigos" && (
          <Products
            products={products}
            isLoading={isLoading}
            fetchError={fetchError}
          />
        )}
        {view === "contactos" && <Contacts />}
      </main>
    </>
  );
}

export default App;
