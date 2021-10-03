

function Carousel() {
 return ( 
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-50" src="http://3.bp.blogspot.com/-024H4NoCbec/UCJ-I-viChI/AAAAAAAAAWo/ujfhUv_fhw0/s1600/perfil-facebook-ok-1.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src="http://s2.glbimg.com/H9-_uUNlU3P6ISRFkTs4DDHzGfg=/0x65:695x485/695x420/s.glbimg.com/po/tt2/f/original/2015/06/26/boato-ou-verdade-facebook-vai-mostrar-quem-visitou-seu-perfil-na-rede0c3b6279bffc8c8269450a8d8ad7924e.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src="https://cdn.domtotal.com/img/noticias/2013-07/639487_149690.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 )
}

export default Carousel;