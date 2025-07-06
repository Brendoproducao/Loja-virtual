import { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import "./home.css";
import Carousel from "../../components/carrossel";
import { useNavigate } from "react-router-dom";

function Home() {
  const { products, searchTerm } = useContext(AppContext);

  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  // Filtrar produtos com base na busca
  const filteredProducts = products.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Cálculo de índices de paginação
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Total de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Função para mudar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const navigate = useNavigate();

  const irParaPagina = (id) => {
    navigate("/detalhes/"+id)
  };


  return (
    <section>
      <Carousel />
      <div className="container">
        {currentProducts.length === 0 ? (
          <h1>Nenhum produto encontrado.</h1>
        ) : (
          currentProducts.map((produto) => (
            <div key={produto.id} className="container-card" onClick={()=>irParaPagina(produto.id)}>
              <img src={produto.img} alt={produto.nome} />
              <p>{produto.nome}</p>
              <strong>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(produto.preco)}
              </strong>
            </div>
          ))
        )}
      </div>

      {/* Controles de Paginação */}
      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
