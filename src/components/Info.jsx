import React from "react";

export default function Info(props) {
  return (
    <div className="split">
      <div className="infoCenter center">
        <img src="https://www.health.harvard.edu/media/content/images/p4_HeartMultivitamins_WL1811_gi918436996.jpg" alt="vitamins" />
      </div>

      <div className="infoCenter center">
        <div className="center" style={{ backgroundColor: "peru" }}>
          <h2>Tienda Naturista Omnivita</h2>
          <p>
            Dedicada a la venta al por menor de productos de la salud, nutrición y belleza. Incluyendo vitaminas, suplementos minerales, hierbas, nutrición deportiva, dietéticos, productos energéticos y de belleza. Nuestros productos son de alta calidad al alcance de la comunidad. Nos esmeramos por ofrecer productos legítimos al mejor precio para el cuidado de la salud y la belleza.
        </p>
        </div>
      </div>
    </div>
  );
}
