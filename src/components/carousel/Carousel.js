import Carousel from 'react-bootstrap/Carousel'

function CarouselComp(props) {
 return ( 
  <Carousel key={props.pics}>
    {props.pics.map((image) => 
      <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
  </Carousel.Item>
    )}
</Carousel>
 )
}

export default CarouselComp;