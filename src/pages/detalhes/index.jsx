// Detalhes.js
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/context";
import "./detalhes.css";

function Detalhes() {
  const { addToCart } = useContext(AppContext);
  const [produto, setProduto] = useState({});
  const [imagemPrincipal, setImagemPrincipal] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/produtos/?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const item = data[0] || {};
        setProduto(item);
        setImagemPrincipal(item.img || "");
      })
      .catch((erro) => console.error("Erro ao buscar produto:", erro));
  }, [id]);

  return (
    <div id="card-detalhes">
      <div id="card-img">
        <img id="card-img" src={imagemPrincipal} alt="Imagem principal" />
        <div id="card-img-focus">
          {[produto.img, produto.img2, produto.img3].filter(Boolean).map((img, index) => (
            <img
              key={index}
              className="card-img-focus"
              src={img}
              alt={`Miniatura ${index + 1}`}
              onClick={() => setImagemPrincipal(img)}
            />
          ))}
        </div>
      </div>

      <div id="conteiner-descricao">
        <span>Novo  |  +10mil vendidos</span>
        <h1>Produto: {produto.nome}</h1>
        <p>Descrição: {produto.descricao}</p>
        <strong id="preco">Preço: R$ {produto.preco}</strong>
        <div id="conteiner-button">
          <button onClick={() => addToCart(produto)}>Adicionar ao Carrinho</button>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;
