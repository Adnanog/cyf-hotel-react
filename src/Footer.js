import React from "react";

const Footer = props => {
  const info = props.addressInfo;
  return (
    <ul>
      {info.map(infoPiece => (
        <li>{infoPiece}</li>
      ))}
    </ul>
  );
};

export default Footer;
