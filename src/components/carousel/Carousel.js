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
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/a3/88/e2/a388e2818b19bddf22d01326408baff5.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/0b/29/fd/0b29fd0e7ca92fe7e05d0d24a2991dcd.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 )
}

export default CarouselComp;