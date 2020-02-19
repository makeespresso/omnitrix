import React from "react";

export default function Map() {
  return (
    <>
      <h2 className="Headersh2">Ubicación</h2>
      <div className="innerContainer dirDown">
        <iframe className="mapCenter" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.7018042283776!2d-76.5191880196564!3d3.4226253523743497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a7a1cfe3822d%3A0xfcc2040d516d8bc8!2sTienda%20Naturista%20Omnivita!5e0!3m2!1ses-419!2smx!4v1581625397581!5m2!1ses-419!2smx" width="100%" height="300" frameborder="0" allowfullscreen={true} />
      </div>
    </>);
}
