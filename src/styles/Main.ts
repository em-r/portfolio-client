import styled from "styled-components";
// import {} from 'styled-components/cssprop';

export const Main = styled.main<{ width?: string }>`
  width: 80%;
  max-width: ${({ width }) => (width ? width : "500px")};
  margin: 10px auto;
  margin-bottom: 50px;
  header {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  section header {
    font-size: 1.8rem;
  }
  section > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 90%;
    margin: 0 auto;
  }
  .skill p {
    font-size: 1.1rem;
  }
`;

export const Summary = styled.div`
  header {
    font-size: 2.5rem;
  }
`;

export const Skills = styled.section`
  list-style: none;
  width: 600px;
  max-width: 90%;
  margin: 30px auto;
  li {
    display: flex;
    gap: 10px;
  }
  li > div {
    flex: 1;
    h4 {
      font-size: 1.4rem;
      margin: 10px 0;
    }
  }
  li > h4 {
    font-size: 1.4rem;
    align-self: center;
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
  background: ${({ theme }) => theme.bg_primary};
  color: ${({ theme }) => theme.color_primary};
`;
