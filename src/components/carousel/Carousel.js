import Carousel from 'react-bootstrap/Carousel'

function CarouselComp() {
 return ( 
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/31/91/61/319161dff37e119c4ffc3c04391d1a23.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  
</Carousel>
 )
}

export default CarouselComp;