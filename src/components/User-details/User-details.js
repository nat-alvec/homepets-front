import { useState } from "react";
import { Link } from "react-router-dom";

function UserDetails() {
  return (
    <>
      <div>
        <Link to="/cuidadores-de-pets">Voltar aos cuidadores de pets</Link>
      </div>
      <div>
        <h1>Nome do cuidador</h1>
        <h3>Breve descrição</h3>
        <p>Localização</p>
      </div>
      {/* CARROSSEL */}
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
      {/* REVIEWS */}
      <div>
        <p>REVIEW</p>
        {/* SOBRE MIM DE CADA USER */}
        <h3>Sobre</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      {/* COMENTÁRIOS */}
      <div className="container d-flex justify-content-center mt-100 mb-100">
        <div className="row">
          <div className="col-md-12">
            <div>
              <div className="card-body">
                <h4 className="card-title">Comentários Recentes</h4>
              </div>
              <div className="comment-widgets m-b-20">
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      className="rounded-circle mx-1"
                      src="https://i.imgur.com/uIgDDDd.jpg"
                      alt="user"
                      width="50"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h5>Nome do User</h5>
                    <div className="comment-footer">
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                    </div>
                    <p className="m-b-5 m-t-10">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
