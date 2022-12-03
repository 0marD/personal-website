import React from "react";

function Hero() {
  return (
    <>
      <hr id="home" />
      <section className="hero showcase">
        <h2 className="hero__heading">Hola, soy Omar</h2>
        <p className="hero__paragraph">
          Actualmente, soy estudiante en Gestión Empresarial y desarrollador front-end novato.
          <br /><br />
          Como desarrollador front-end, mis habilidades y conocimientos incluyen la implementación de diseño responsivo, manejo node.js, consumo de APIs , Git, GitHub, JavaScript, HTML y CSS.
          <br /><br />
          Así como el uso e implementación de preprocesadores como SASS, Less y Stylus.
          Además, actualmente estoy aprendiendo usar React y Vite de los cuales ya he realizado algunos proyectos.
        </p>
      </section>
    </>
  );
}

export default Hero;
