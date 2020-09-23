import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Notif } from "../../styles/Contact";

const Success: React.FC = () => {
  return (
    <Notif style={{ background: "#16d355" }}>
      <div style={{ alignSelf: "center" }}>
        <FaCheckCircle size={35} />
      </div>
      <div>
        <h4>Thank you for contacting me!</h4>
        <h4>I'll get back to you as soon as possible.</h4>
      </div>
    </Notif>
  );
};

export default Success;
