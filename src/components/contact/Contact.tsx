import React, { useEffect } from "react";
import { Main } from "../../styles/Main";
import Form from "./Form";
import { ContactHeader } from "../../styles/Contact";

const EMAIL = "elmehdirami5@gmail.com";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "EMR - Contact";
  }, []);

  return (
    <Main>
      <ContactHeader>
        <h2>
          Send me an email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </h2>
        <div>
          <div className="split" />
          <div style={{ flex: 1, textAlign: "center" }}>OR</div>
          <div className="split" />
        </div>
        <h2>Fill in the form</h2>
      </ContactHeader>
      <Form />
    </Main>
  );
};

export default Contact;
