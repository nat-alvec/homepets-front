import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";

function AdDetails() {
  return (
    <>
      <div>
        <Link to="/detalhes-anuncio">Voltar às casas</Link>
      </div>
      <div>
        <h1>Descrição breve</h1>
        <p>Localização</p>
        <p>símbolos de pets na casa</p>
      </div>
      <div>
        {/* CARROSSEL */}
        <Carousel />
      </div>

      <div>
        {/* SOBRE MIM DE CADA USER */}
        <h3>Sobre mim</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <h3>Sobre a casa</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <h3>Responsabilidades</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      {/* PETS DO USUÁRIO NO ANÚNCIO */}
      <div>
        <h3>Conheça meus pets</h3>
        <img
          src="https://media.istockphoto.com/photos/cute-sitting-havanese-puppy-dog-picture-id611308904?k=20&m=611308904&s=170667a&w=0&h=2emV7QLqhHRN0eepi0ZxZz8UtXD_sk-tYckF38Dz2IY="
          alt="User pet photo"
          class="rounded-circle"
          width="95"
        />
        <div class="mt-3">
          <h4>Pet Name</h4>
          <p class="text-secondary mb-1">Raça</p>
          <p class="text-muted font-size-sm">Idade</p>
        </div>
      </div>
      {/* CALENDÁRIO DE DISPONIBILIDADE E INFORMAÇÕES DE CONTATO */}
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-4 mt-3">
          <div className="first">
            <div className="time d-flex flex-row align-items-center justify-content-between mt-3"></div>
          </div>
          <div className="second d-flex flex-row mt-2">
            <div className="image mr-3">
              {" "}
              <img
                src="https://i.imgur.com/0LKZQYM.jpg"
                className="rounded-circle"
                width="60"
              />{" "}
            </div>
            <div className="">
              <div className="d-flex flex-row mb-1">
                {" "}
                <span>Dono do Pet</span>
              </div>
              <p>Home and pet owner</p>
            </div>
          </div>
          <hr className="line-color" />
          <h6>Período de cuidado dos pets:</h6>
          <p>DATA</p>
          <hr className="line-color" />
          <div className="third mt-4">
            <h6>Entre em contato:</h6>
            <p>Símbolos de contato</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdDetails;
