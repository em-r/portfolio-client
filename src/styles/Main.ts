import styled from "styled-components";
// import {} from 'styled-components/cssprop';

export const Main = styled.main`
  width: 80%;
  max-width: 1000px;
  margin: 10px auto;
`;

export const Summary = styled.div`
  header {
    font-size: 2.5rem;
  }
`;

export const Skills = styled.ul`
  list-style: none;
  width: 600px;
  max-width: 90%;
  margin: 40px auto;
  li {
    font-size: 1.5rem;
  }
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
  color: #fff;
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

export const WrapperComp = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bg_primary};
  color: ${({ theme }) => theme.color_primary};
`;
