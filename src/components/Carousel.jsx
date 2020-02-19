// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// export default class CarouselComp extends React.Component {
//   render() {
//     return (
//       <div className="Carousel center">
//         <span>CAROUSEL</span>
//       </div>
//     );
//   }
// }

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Heroimages from '../assets/img/coverimage.jpeg';

function FunCarousel() {
  return (
    <div className="tester">
      < Carousel >
        <Carousel.Item>
          <img className="carouselImg" src={Heroimages} alt="Omnivita" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
      <div className="banner">
        <p>Productos naturales de alta calidad para el cuidado de la salud.</p>
      </div>
    </div>
  )
}

export default FunCarousel;
