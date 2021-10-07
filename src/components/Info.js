import nataliaImg from './images/natalia.jpeg';
import sanderImg from './images/sander.jpeg';
import petHouse from './images/pet-house.png';
import brandName from './images/homepets-brand.png';

function Info() {
  return (
    <div className='container d-flex flex-column align-items-center mt-3 mb-5'>
      <div className="d-flex align-items-end">
        <img
          className='m-0'
          src={petHouse}
          alt='logo'
          style={{ width: '90px' }}
        />
        <img
          className='m-0'
          src={brandName}
          alt='logo'
          style={{ width: '150px' }}
        />
      </div>

      <div
        className='card text-center mt-4 border-light'
        style={{ width: '22rem' }}
      >
      <h1 className="mb-4">Desenvolvedores</h1>
        <img
          src={nataliaImg}
          className='card-img-top rounded-circle'
          alt='...'
          style={{ width: '60%', margin: 'auto' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>Natália Alves</h5>
          <p className='card-text'>
            Apaixonada por programação e um bom restaurante! Não é muito fã de
            calor :)!
          </p>
          <a
            href='https://www.linkedin.com/in/nat%C3%A1lia-alves-5b00891b9/'
            className='btn btn-light btn-sm'
            target='_blank'
            rel='noreferrer'
          >
            Linkedin
          </a>
          <a
            href='https://github.com/nat-alvec'
            className='btn btn-light btn-sm'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
      <div
        className='card text-center mt-2 border-light'
        style={{ width: '22rem' }}
      >
        <img
          src={sanderImg}
          className='card-img-top rounded-circle'
          alt='...'
          style={{ width: '60%', margin: 'auto' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>Sander Iwase</h5>
          <p className='card-text mt-3'>
            {' '}
            Apaixonado por tudo relacionado a computadores, tecnologia e
            programação!{' '}
          </p>
          <a
            href='https://www.linkedin.com/in/sanderiwase/'
            className='btn btn-light btn-sm'
            target='_blank'
            rel='noreferrer'
          >
            Linkedin
          </a>
          <a
            href='https://github.com/sanderiw'
            className='btn btn-light btn-sm'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
