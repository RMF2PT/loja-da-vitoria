import Product from "./Product";

type ProductsProps = {
  products: {
    id: number;
    nome: string;
    preco: string;
    descricao: number;
    imagem: string;
  }[];
  isLoading: boolean;
  fetchError: string | null;
};

const Products = ({ products, isLoading, fetchError }: ProductsProps) => {
  return (
    <div>
      <h1>Artigos</h1>
      {fetchError && <p className="error">{fetchError}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {!fetchError && !isLoading && products.length === 0 && (
        <p>Sem artigos disponíveis...</p>
      )}
      {!fetchError && !isLoading && products.length > 0 && (
        <section>
          <div id="product-container">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
export default Products;
