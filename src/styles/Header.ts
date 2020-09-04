import styled from "styled-components";

export default styled.header`
  font-family: "Segoe UI";
  font-weight: "bold";
  position: relative;
  /* @media (min-width: 650px) {
    justify-content: space-between;
  } */
`;

export const SiteLogo = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: #eb2b64;
`;

export const MenuLogo = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: 1.5em;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  @media (min-width: 800px) {
    position: revert;
    height: revert;
    max-width: 800px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 2em;
  gap: 25px;
  margin: 80px auto;
  @media (min-width: 800px) {
    max-width: 600px;
    flex-direction: row;
    font-size: 1.1em;
    gap: 0;
    margin: 20px auto;
  }
`;
