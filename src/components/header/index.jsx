import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/context";  // Verifique se o caminho está correto
import "./header.css"
function Header() {
  const { searchTerm, setSearchTerm } = useContext(AppContext);  // Acesso ao estado de pesquisa

  return (
    <header>
      <div><Link to="/">LMB</Link></div>
      <div className="pesquisa">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={searchTerm}  // Estado de pesquisa
          onChange={(e) => setSearchTerm(e.target.value)}  // Atualizando o termo de pesquisa
        />
        <FaSearch />
      </div>
      <div id="card-conteudo"> <p><Link to="/cadastro">Crie a sua conta</Link></p><p><Link to="/login">Entre</Link></p><Link to="/card" id="card-icone"><FiShoppingCart /></Link></div>
    </header>
  );
}

export default Header;
