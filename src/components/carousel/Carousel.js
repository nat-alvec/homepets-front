import Carousel from 'react-bootstrap/Carousel'

function CarouselComp(props) {
 return ( 
  <Carousel key={props.pics}>
    {props.pics.map((image, index) => 
      <Carousel.Item key={index}>
    <img
      key={index}
      className="d-block w-100"
      src={image}
      alt="First slide"
      style={{ 
        width: '290px',
        height: '450px',
        objectFit: 'cover',
      }}
    />
  </Carousel.Item>
    )}
</Carousel>
 )
}

export default CarouselComp;