import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 16px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ffffff;
`;

export const Nome = styled.h2`
  font-size: 18px;
  margin: 0;
  color: #222222;
`;

export const Preco = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #222222;
`;

export const Botao = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  background-color: ${(props) => (props.$adicionado ? "#198754" : "#6c757d")};
`;
