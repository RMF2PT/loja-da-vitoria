type NavProps = {
  handleView: (event: React.MouseEvent<HTMLLIElement>) => void;
};

const Nav = ({ handleView }: NavProps) => {
  return (
    <nav>
      <h1>Loja de Doces Profissionais</h1>
      <ul>
        <li onClick={handleView}>Início</li>
        <li onClick={handleView}>Artigos</li>
        <li onClick={handleView}>Contactos</li>
      </ul>
    </nav>
  );
};
export default Nav;
