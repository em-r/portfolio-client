import styled from "styled-components";

export const Main = styled.main<{ width?: string }>`
  width: 80%;
  min-height: 90vh;
  max-width: ${({ width }) => (width ? width : "500px")};
  margin: 10px auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  > * {
    flex: 1;
  }
  > section {
    margin-bottom: 20px;
  }
  header {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  section header {
    font-size: 1.8rem;
  }
  /* section > div { */
  section  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 90%;
    margin: 0 auto;
  }
  .skill p {
    font-size: 1.1rem;
  }
  .projects,
  .blogs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .project,
  .blog {
    display: flex;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  }
  .project {
    flex-direction: column;
    background: #fff;
    color: #121212;
    @media (min-width: 800px) {
      flex-direction: row;
    }
    > div {
      flex: 1;
      align-self: center;
    }
    img {
      width: 100%;
    }
  }
  .blog header {
    display: flex;
    a {
      color: ${({ theme }) => theme.color_anchor};
    }
    .date {
      margin-left: auto;
      font-size: 0.9rem;
      align-self: flex-end;
    }
    .blog-meta-data {
      margin-left: auto;
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
    }
  }
  .contact-heading {
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
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  form > * {
    display: block;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color_primary};
    border-radius: 5px;
    padding: 10px;
  }
  form input {
    font-size: 2rem;
  }
  form textarea {
    resize: vertical;
    min-height: 200px;
    font-size: 1.7rem;
  }
  form button {
    background: #0555ea;
    color: #fff;
    border: 1px solid #fff;
    font-size: 1.5rem;
    cursor: pointer;
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
  display: flex;
  flex-direction: column;
  gap: 30px;
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

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  padding: 0;
  @media (min-width: 800px) {
    color: ${({ theme }) => theme.color_secondary};
    background: ${({ theme }) => theme.bg_secondary};
  }
`;

export const SFooter = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
`;

export const WrapperComp = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bg_primary};
  color: ${({ theme }) => theme.color_primary};
`;
