import React from "react";
import InfoImg from '../assets/img/img-omnivita.png';

export default function Info(props) {
  return (
    <div id="sobrenosotros" className="split">
      <div className="infoCenter center">
        <img src={InfoImg} alt="Info Image" />
      </div>

      <div className="infoCenter center">
        <div className="center fontspace" style={{ backgroundColor: "#EEF5DB" }}>
          <h2>Tienda Naturista Omnivita</h2>
          <br></br>
          <p>
            Dedicada a la venta al por menor de productos de la salud, nutrición y belleza. Incluyendo vitaminas, suplementos minerales, hierbas, nutrición deportiva, dietéticos, productos energéticos y de belleza.</p>
          <br></br>
          <p> Nuestros productos son de alta calidad al alcance de la comunidad. Nos esmeramos por ofrecer productos legítimos al mejor precio para el cuidado de la salud y la belleza.</p>
        </div>
      </div>
    </div>

  );
}
