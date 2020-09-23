import React from "react";
import { FaXingSquare, FaLinkedin } from "react-icons/fa";
import { Notif } from "../../styles/Contact";

type Props = {
  message?: string;
};

const Error: React.FC<Props> = ({ message }) => {
  return (
    <Notif style={{ background: "#d00d0d", marginBottom: "10px" }}>
      <div style={{ alignSelf: "center" }}>
        <FaXingSquare size={35} />
      </div>
      <div>
        <h4>Sorry! An error occured.</h4>
        <h4>
          {message ? (
            <span style={{ textTransform: "uppercase" }}>{message}</span>
          ) : (
            <>
              Please try again, or contact me via{" "}
              <a
                href="https://www.linkedin.com/in/el-mehdi-rami-78bb6a182/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <FaLinkedin />
              </a>
            </>
          )}
        </h4>
      </div>
    </Notif>
  );
};

export default Error;
