import { useState } from "react";
import { Card, Nome, Preco, Botao } from "./styles";

const formatarPreco = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function CardProduto({ nome, preco }) {
  const [adicionado, setAdicionado] = useState(false);

  function alternarAdicionado() {
    setAdicionado((atual) => !atual);
  }

  return (
    <Card>
      <Nome>{nome}</Nome>
      <Preco>{formatarPreco.format(preco)}</Preco>

      <Botao $adicionado={adicionado} onClick={alternarAdicionado}>
        {adicionado ? "Adicionado ✓" : "Adicionar ao carrinho"}
      </Botao>
    </Card>
  );
}
