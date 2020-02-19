import React from "react";
import Envelope from '../assets/img/Email.png';
import Movil from '../assets/img/Movil.png';
import Leaf from '../assets/img/leaf.png';


export default function Contact() {
  return (
    <>
      <h2 className="Headersh2">Contacto</h2>

      <div id="contacto" className="innerContainer dirDown footer">

        <div
          className="split center products"
          style={{ width: "80%", maxWidth: "820px", alignSelf: "center" }}
        >
          <div className="contact center" style={{ flex: 4 }}>
            <ul>
              <li>Encuentranos al interior de</li>
              <br></br>
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
                <br></br>
                <li>Calle 27 #33 B - 09</li>
                <li>Cali, Colombia.</li>
                <br></br>
              </a>
              <a target="_blank" href="mailto:omnivita.ventas@gmail.com">
                <li className="center" style={{ justifyContent: "start" }}>

                  <img className="icon" src={Envelope} alt="Correo Electronico" />

                  omnivita.ventas@gmail.com
              </li>
              </a>
              <a href="tel:+573128140509">
                <li className="center" style={{ justifyContent: "start" }}>

                  <img className="icon" src={Movil} alt="Télefono" />

                  +57 312 8140509
              </li>
              </a>
            </ul>
          </div>

          <div className="contact center" style={{ flex: 4 }}>
            <ul>
              <li className="StyleLi">Horarios de Atención</li>
              <br></br>
              <li className="StyleLista">Lunes - Sábado</li>
              <br></br>

              <li>9:00 AM - 12:00 PM </li>
              <li>3:00 PM - 8:00 PM</li>
              <br></br>
              <li className="StyleLista">Domingo</li>
              <br></br>

              <li>9:00 AM - 1:00 PM</li>
            </ul>
          </div>
        </div>
        <p>© 2020 Tienda Naturista Omnivita. Todos los Derechos Reservados.</p>
      </div >
    </>
  );
}
