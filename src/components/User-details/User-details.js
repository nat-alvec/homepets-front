import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import "../User-details/userDetails.css";

function UserDetails() {
  return (
    <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
      <div
        className="card border-light mt-2 mb-4"
        style={{ width: "98vw", maxWidth: "740px" }}
      >
        {/* BOTÃO DE VOLTAR À PÁG ANTERIOR */}
        <div className="m-2">
          <Link to="/cuidadores-de-pets">Voltar aos cuidadores de pets</Link>
        </div>
        {/* SOBRE MIM DE CADA USER */}
        <div className="card mb-4">
          <div className="card-body">
            <h1 className="titleFont">Nome do cuidador</h1>
            <p className="subtitleFont">Breve descrição</p>
            <p className="localizationFont">Localização</p>
            <p> Reviews</p>
          </div>
        </div>
        {/* CARROSSEL */}
        <div>
          <Carousel />
        </div>
        {/* DESCRIÇÃO SOBRE O USER */}
        <div>
          <p className="subtitleFont">Sobre mim</p>
          <p className="textsFonts">
            lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        {/* COMENTÁRIOS */}
        <div className="card-body">
          <h4 className="card-title comment-title">Comentários Recentes</h4>
        </div>
        <div className="container d-flex justify-content-center mt-100 mb-100">
          <div className="row">
            <div className="col-md-12">
              <div>
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
                      <h5 className="comment-name">Nome do User</h5>
                      <div className="comment-footer star-color">
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </div>
                      <p className="m-b-5 m-t-10 textsFonts">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
