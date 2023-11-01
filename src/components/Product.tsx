type ProductProps = {
  product: {
    id: number;
    nome: string;
    preco: string;
    descricao: number;
    imagem: string;
  };
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="product">
      <img src={product.imagem} alt={product.nome} />
      <div className="content">
        <h2>{product.nome}</h2>
        <p>{product.descricao}</p>
        <p className="price">
          {new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR",
          }).format(product.preco as unknown as number)}
        </p>
        <button className="btn">Adicionar ao carrinho</button>
      </div>
    </div>
  );
};
export default Product;
