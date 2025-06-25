import React from "react";

const ProjectCard = ({ title, description }) => {

    return (
        <div className="headerDiv">            
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ProjectCard;