import "./App.css";

function App() {
  return (
    <div className="romantic-page">

      <div className="content">

        {/* CANCIÓN */}
        <section className="section">
          <img src="/foto1.jpg" alt="Caratula" className="cover" />

          <h2>Gracias a Ti</h2>
   

          <audio controls>
            <source src="/cancion.mp3" type="audio/mpeg" />
          </audio>

          <p className="scroll-text">Desliza ↓</p>
        </section>

        {/* FOTOS */}
        <section className="section">
          <h2>Nuestros Momentos</h2>

          <div className="gallery">
            <img src="/foto1.jpg" alt="" />
            <img src="/foto2.jpg" alt="" />
            <img src="/foto3.jpg" alt="" />
            <img src="/foto5.jpg" alt="" />

          </div>
        </section>

        {/* PREGUNTA */}
        <section className="section question">
          <h2>Quiero decirte algo…</h2>

          <p>
            No quiero repetir el pasado.  
            Quiero hacerlo mejor.  
            <br /><br />
            No te presiono…  
            solo quiero ser honesto contigo.  
            <br /><br />
            ¿Te gustaría ser mi San Valentín  
            y ver qué pasa si lo intentamos bien esta vez? ❤️
          </p>

          <div className="buttons">
<button
  className="yes"
  onClick={() =>
    window.open(
      "https://wa.me/5214413900424?text=Sí,%20quiero%20ser%20tu%20San%20Valentín%20❤️",
      "_blank"
    )
  }
>
  Sí, intentémoslo ❤️
</button>
<button
  className="yes"
  onClick={() =>
    window.open(
      "https://wa.me/5214413900424?text=Sí,%20quiero%20ser%20tu%20San%20Valentín%20❤️",
      "_blank"
    )
  }
>
  Hablemos ❤️
</button>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;

