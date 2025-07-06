// Card.js
import { useContext } from "react";
import { AppContext } from "../../context/context";
import "./card.css";

function Card() {
  const {
    cardprodutos,
    incrementarProduto,
    decrementarProduto,
    removerProduto,
  } = useContext(AppContext);

  const total = cardprodutos.reduce(
    (acc, produto) => acc + produto.preco * produto.quantidade,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrinho de Compras</h1>
      {cardprodutos.length === 0 ? (
        <p className="cart-empty">Seu carrinho está vazio.</p>
      ) : (
        <>
          {cardprodutos.map((produto) => (
            <div key={produto.id} className="cart-item">
              <img src={produto.img} alt={produto.nome} className="cart-img" />
              <div className="cart-info">
                <h3>{produto.nome}</h3>
                <p>Quantidade: {produto.quantidade}</p>
                <p>Preço unitário: R$ {produto.preco.toFixed(2)}</p>
                <p>Subtotal: R$ {(produto.preco * produto.quantidade).toFixed(2)}</p>

                <div className="cart-actions">
                  <button
                    className="btn decrement"
                    onClick={() => decrementarProduto(produto.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn increment"
                    onClick={() => incrementarProduto(produto.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn remove"
                    onClick={() => removerProduto(produto.id)}
                  >
                    Excluir do carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <button className="checkout-btn">Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
