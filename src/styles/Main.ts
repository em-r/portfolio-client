import styled from "styled-components";

export const Main = styled.main`
  width: 80%;
  max-width: 1000px;
  margin: 10px auto;
`;

export const Summary = styled.div`
  font-size: 3rem;
`;

export const SFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background: #0555ea;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
