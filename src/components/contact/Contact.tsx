import React, { useEffect } from "react";
import { Main } from "../../styles/Main";
import Form from "./Form";

const EMAIL = "elmehdirami5@gmail.com";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "EMR - Contact";
  }, []);

  return (
    <Main>
      <div className="contact-heading">
        <h2>
          Send me an email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </h2>
        <div>
          <div className="split" />
          <div style={{ flex: 1, textAlign: "center" }}>OR</div>
          <div className="split" />
        </div>
        <h2>Fill in the form</h2>
      </div>
      <Form />
    </Main>
  );
};

export default Contact;
