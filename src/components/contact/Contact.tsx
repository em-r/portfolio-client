import React, { useEffect, useContext } from "react";
import { Main } from "../../styles/Main";
import Form from "./Form";
import { ContactHeader } from "../../styles/Contact";
import { globalContext } from "../../store/globalContext";

const EMAIL = "elmehdirami5@gmail.com";

const Contact: React.FC = () => {
  const {
    globalState: { menuToggle },
  } = useContext(globalContext);
  useEffect(() => {
    document.title = "EMR - Contact";
  }, []);

  return (
    <Main isHidden={menuToggle}>
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
