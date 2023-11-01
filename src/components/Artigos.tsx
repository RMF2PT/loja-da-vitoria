const Products = () => {
  return (
    <div>
      <h1>Artigos</h1>
      <section>
        <div id="product-container">
          <div className="product">
            <img
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5ByAQYhotky_X4y6etuqQwjn-jM4-dIEyztDjP5Z9yqtlXEQQ4WlWpVZp6idRwqOwz5LiKXpSfhJnn-UJFJKtg42lQJl8YV3LKo3zvXtr9rgGb1si2zDhKYnZ41OsEg&usqp=CAc"
              alt="Kit Kat"
            />
            <div className="content">
              <h2>Kit Kat</h2>
              <p>Chocolate</p>
              <p className="price">2,00€</p>
              <button className="btn">Adicionar ao carrinho</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1ghxQdwNIDfmUpHiYMleADN4LloHFN_VDg-uI2sgucRu8ZzT6w5w8Qw_MF-dmGsCi8sKBZMsjaDqSyhr6ZVRXz5Z5mWarYB9MjssD4-ozYGI1afVNSDz4sU6UinRTRmpTeNMldlam3Q&usqp=CAc"
              alt="Kinder Chocolate"
            />
            <div className="content">
              <h2>Kinder Chocolate</h2>
              <p>Chocolate</p>
              <p className="price">10,00€</p>
              <button className="btn">Adicionar ao carrinho</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5jkoOyYOO0a_FIIKSR-3tLNImwFzIze0WovUbWudh4S9Pe8uJ067W0yzojSq5TZo1nB-aYMleQLsjMgPUYuyDEZU1zaG6FU-D-ggrs3U7IUsPBBB9H-jUbPEDttM&usqp=CAc"
              alt="Milka Chocolate"
            />
            <div className="content">
              <h2>Milka Chocolate</h2>
              <p>Chocolate</p>
              <p className="price">20,00€</p>
              <button className="btn">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Products;
