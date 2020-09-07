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
  /* color: #eb2b64; */
  color: #fff;
`;

export const MenuLogo = styled.div<{ isOpen: boolean }>`
  font-size: 1.5em;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 0.3rem;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 800px) {
    display: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    &:nth-child(1) {
      width: ${({ isOpen }) => !isOpen && "1.2rem"};
      align-self: flex-end;
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      transform-origin: 3px;
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      transform-origin: 3px;
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
  }
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  padding: 40px 0;
  @media (min-width: 800px) {
    position: revert;
    height: revert;
    max-width: 800px;
    display: block;
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
