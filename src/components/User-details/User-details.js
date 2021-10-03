import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel"

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
      <Carousel/>
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
