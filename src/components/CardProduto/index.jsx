import { useState } from "react";
import { Card, Nome, Preco, Botao } from "./styles";

export function CardProduto({ nome, preco }) {

  const [adicionado, setAdicionado] = useState(false);

  function alternarAdicionado() {
    setAdicionado(!adicionado);
  }

  return (
    <Card>
      <Nome>{nome}</Nome>
      <Preco>R$ {preco.toFixed(2)}</Preco>
      <Botao $adicionado={adicionado} onClick={alternarAdicionado}>
        {adicionado ? "Adicionado ✓" : "Adicionar ao carrinho"}
      </Botao>
    </Card>
  );
}
