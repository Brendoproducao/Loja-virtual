// AppContext.js
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cardprodutos, setCardProdutos] = useState([]); // carrinho
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then(setProducts)
      .catch((erro) => console.error("Erro ao buscar produtos:", erro));
  }, []);

  const addToCart = (produto) => {
    setCardProdutos((prev) => {
      const existente = prev.find((p) => p.id === produto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const incrementarProduto = (id) => {
    setCardProdutos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantidade: p.quantidade + 1 } : p
      )
    );
  };

  const decrementarProduto = (id) => {
    setCardProdutos((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantidade: p.quantidade - 1 } : p
        )
        .filter((p) => p.quantidade > 0) // remove produtos com 0 quantidade
    );
  };

  const removerProduto = (id) => {
    setCardProdutos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        searchTerm,
        setSearchTerm,
        cardprodutos,
        setCardProdutos,
        addToCart,
        incrementarProduto,
        decrementarProduto,
        removerProduto,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
