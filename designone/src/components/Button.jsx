import React from "react";
import '../components/component.css';

const Button = ({children}) => {
return(
    <div class="sButton">
        {children}
    </div>
)
};

export default Button;