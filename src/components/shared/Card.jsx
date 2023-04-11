import React from "react";
import { PropTypes } from "prop-types";
function Card({ children, reverse }) {
  return <div className={`card ${reverse ? "reverse" : ""}`}>{children}</div>;
}

Card.prototype = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.boolean,
};
export default Card;
