import styled from "styled-components";

export const Notif = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  color: #fff;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  gap: 20px;
  flex: 0;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  > * {
    display: block;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color_primary};
    border-radius: 5px;
    padding: 10px;
  }
  input {
    font-size: 2rem;
  }
  textarea {
    resize: vertical;
    height: 150px;
    font-size: 1.7rem;
  }
  button {
    background: #0555ea;
    color: #fff;
    border: 1px solid #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const ContactHeader = styled.div`
  flex: 0;
  h2 {
    font-family: "Thasadith";
    text-align: center;
  }
  a {
    color: ${({ theme }) => theme.color_anchor};
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .split {
    height: 2px;
    background: ${({ theme }) => theme.color_primary};
    flex: 1;
  }
`;