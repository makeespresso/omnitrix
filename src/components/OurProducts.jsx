import React from "react";
import Product from "./Product";
import ProteinasImg from "../assets/img/proteins.png";
import VitaminasImg from "../assets/img/vitamins.jpeg";
import ProductosNaturalesImg from "../assets/img/naturalProducts.png";
import CuidadoPielImg from "../assets/img/skinCare.png";

export default function OurProducts() {
  return (
    <div className="innerContainer dirDown">
      <h2>Nuestros productos</h2>
      <div className="split products" style={{ padding: 0 }}>
        <Product name="Proteinas" order="1" picAlt="Vitamina_A" picSrc={ProteinasImg} />
        <Product name="Vitaminas" order="1" picAlt="Vitamina_C" picSrc={VitaminasImg} />
        <Product name="Productos Naturales" order="2" picAlt="Awitamina_x" picSrc={ProductosNaturalesImg} />
        <Product name="Cuidado de la Piel" order="2" picAlt="Vitamina_W" picSrc={CuidadoPielImg} />
      </div>
    </div>
  );
}
