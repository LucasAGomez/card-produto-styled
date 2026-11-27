import { CardProduto } from "./components/CardProduto";
import styled from "styled-components";

const Lista = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;
`;

function App() {
  return (
    <Lista>
      <CardProduto nome="Tênis Runner" preco={299.9} />
      <CardProduto nome="Camiseta Básica" preco={79.9} />
      <CardProduto nome="Mochila Urbana" preco={189.9} />
    </Lista>
  );
}

export default App;
