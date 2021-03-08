import React, { useState } from "react";
import Success from "./Success";
import Error from "./Error";
import { usePost } from "../../hooks";
import { ContactForm } from "../../styles/Contact";

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const useSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sendMessage = await usePost(email, message);
    if (!sendMessage) return null;
    const { success } = sendMessage;
    if (success === false) {
      const { message } = sendMessage;
      setError(true);
      setErrorMessage(message);
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    return <Success />;
  }
  return (
    <>
      {error && errorMessage && <Error message={errorMessage} />}
      <ContactForm onSubmit={useSumbit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        />
        <button type="submit">Send</button>
      </ContactForm>
    </>
  );
};

export default Form;
