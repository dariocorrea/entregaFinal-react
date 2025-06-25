import React from "react";

const Button = ({ classes, buttonText, onClick }) => {
    
    //const style = {backgroundColor: color}

    return (        
        <button className={classes} onClick={onClick}>{buttonText}</button>
    );
};

export default Button;