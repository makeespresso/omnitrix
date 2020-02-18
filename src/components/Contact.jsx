import React from "react";

export default function Contact() {
  return (
    <div id="contacto" className="innerContainer dirDown">
      <h2>Contacto</h2>
      <div
        className="split center products"
        style={{ width: "80%", maxWidth:"820px", alignSelf: "center" }}
      >
        <div className="contact center" style={{ flex: 4 }}>
          <ul>
            <li>Encuentranos al interior de</li>
            <a href="https://goo.gl/maps/YnYUjw9cd13AbRA86">
              <li>
                <img
                  style={{
                    height: "2.5rem",
                    alignSelf: "center",
                    justifySelf: "center"
                  }}
                  src="http://eljardin.com.co/contenido/uploads/2018/01/El-Jardin-Logo.png"
                  alt="El_Jardin_Autoservicio"
                />
              </li>
              <li>Calle27 #33 B - 09</li>
              <li>Cali, Colombia</li>
            </a>
            <a href="mailto:omnivita.ventas@gmail.com">
              <li className="center" style={{ justifyContent: "start" }}>
                <img
                  className="icon"
                  src="https://www.pngitem.com/pimgs/m/516-5169649_palm-tree-leaf-png-transparent-png.png"
                  alt="green_leaf"
                />
                omnivita.ventas@gmail.com
              </li>
            </a>
            <a href="tel:+573128140509">
              <li className="center" style={{ justifyContent: "start" }}>
                <img
                  className="icon"
                  src="https://www.pngitem.com/pimgs/m/516-5169649_palm-tree-leaf-png-transparent-png.png"
                  alt="green_leaf"
                />
                +57 312 8140509
              </li>
            </a>
          </ul>
        </div>

        <div className="contact center" style={{ flex: 1 }}>
          <img
            id="logo"
            src="https://www.pngitem.com/pimgs/m/516-5169649_palm-tree-leaf-png-transparent-png.png"
            alt="green_leaf"
          />
        </div>

        <div className="contact center" style={{ flex: 4 }}>
          <ul>
            <li>Horarios de atención</li>
            <li>Lunes - Sábado</li>
            <li>9:00 - 12:00</li>
            <li>15:00 - 20:00</li>
            <li>Domingo</li>
            <li>9:00 - 13:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
