import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import "../styles.css";

function AboutMe(){


    return (
      
      <div class="justify-content-center d-flex flex-column align-items-center text-justify">
        <img src="img/eu.jpeg" alt="..." class="rounded-circle my-4" style={{width:26+"vh", textAlign:"justify"}}></img>
        <div style={{maxWidth:45+"vw"}}>
        <p class="text mb-5">
        Hi there! My name is Luana and I'm a passionate technology student with a keen interest in the world of web development.
        When I'm not coding or studying, you can often find me exploring new biking trails or embarking on travel adventures. 
        My ultimate dream is to be a web developer, where I can combine my passion for technology with my creative instincts to build innovative and user-friendly websites that make a positive impact on people's lives.
        </p>
        </div>
      </div>
    );
}

export default AboutMe;