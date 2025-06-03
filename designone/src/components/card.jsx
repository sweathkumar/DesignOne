import React from "react";
import './component.css';

const Card = ({ children }) => {
return(
    <div className="sCard px-4 py-3">
{ children }
    </div>)
};

export default Card;