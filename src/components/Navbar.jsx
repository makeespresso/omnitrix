import React from "react";
import logoOmnivita from '../assets/img/logo.png';
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import cart from '../assets/img/cart.png';


export default function Navbar() {
  return (
    <div className="navbar">
      <div id="logo" className="navbar nb-comp">
        < a href="#home">
          <img
            className="logo"
            src={logoOmnivita}
            alt="Omnivita Tienda Naturista"
          />
        </a>
      </div>
      <div id="social" className="navbar nb-comp">
        <div className="icon">
          < a target="_blank" href="https://www.facebook.com/tiendanaturistaomnivita/"><img src={facebook} className="icon" alt="Facebook Page" /></a>
        </div>
        <div className="icon">
          < a target="_blank" href="https://www.instagram.com/tiendanaturistaomnivita/"><img src={instagram} className="icon" alt="Instagram Page" /></a>

        </div>
        <div className="icon">
          < a target="_blank" href="https://tiendanaturista-omnivita.mercadoshops.com.co/"><img src={cart} className="icon" alt="Shopping Cart" /></a>
        </div>
      </div>
      <div id="links" className="navbar nb-comp">
        <span>< a href="#sobrenosotros">Sobre Nosotros</a></span>
        <span>< a href="#contacto">Contacto</ a></span>
      </div>
    </div>
  );
}
