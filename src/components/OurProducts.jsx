// import React from "react";
// import Product from "./Product";

// export default function OurProducts() {
//   return (
//     <div className="innerContainer dirDown">
//       <h2>Nuestros productos</h2>
//       <div className="split products" style={{ padding: 0 }}>
//         <Product name="Proteinas" order="1" picAlt="Vitamina_A" picSrc="https://cdn.shopify.com/s/files/1/2513/6832/products/VitaminC1000Mg90.jpg?v=1515764523" />
//         <Product name="Vitaminas" order="1" picAlt="Vitamina_C" picSrc="https://cdn.shopify.com/s/files/1/2513/6832/products/VitaminC1000Mg90.jpg?v=1515764523" />
//         <Product name="Productos Naturales" order="2" picAlt="Awitamina_x" picSrc="https://cdn.shopify.com/s/files/1/2513/6832/products/VitaminC1000Mg90.jpg?v=1515764523" />
//         <Product name="Cuidado de la Piel" order="2" picAlt="Vitamina_W" picSrc="https://cdn.shopify.com/s/files/1/2513/6832/products/VitaminC1000Mg90.jpg?v=1515764523" />
//       </div>
//     </div>
//   );
// }

import React from "react";
import Product from "./Product";
import ProteinasImg from "../assets/img/proteins.png";
import VitaminasImg from "../assets/img/vitamins.jpeg";
import ProductosNaturalesImg from "../assets/img/naturalProducts.png";
import CuidadoPielImg from "../assets/img/skinCare.png";

export default function OurProducts() {
  return (
    <>
      <h2 className="Headersh2">Nuestros productos</h2>
      <div className="innerContainer dirDown">
        <div className="split products" style={{ padding: 0 }}>
          <Product name="Proteinas" order="1" picAlt="Vitamina_A" picSrc={ProteinasImg} />
          <Product name="Vitaminas" order="1" picAlt="Vitamina_C" picSrc={VitaminasImg} />
          <Product name="Productos Naturales" order="2" picAlt="Awitamina_x" picSrc={ProductosNaturalesImg} />
          <Product name="Cuidado de la Piel" order="2" picAlt="Vitamina_W" picSrc={CuidadoPielImg} />
        </div>
      </div>
    </>
  );
}
