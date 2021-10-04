import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/images/pet-house.png';
import dogHomepage from '../components/images/homepage-dog.jpg';
import brandName from '../components/images/homepets-brand.png';

function Home() {
    return (
        <div className='mb-4'>
            <div className='card text-dark mx-4 mt-4'>
                <img
                    src={dogHomepage}
                    className='card-img'
                    alt='dog in the garden'
                    style={{
                        height: '25rem',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
                <div className='card-img-overlay text-center d-flex justify-content-end align-items-center'>
                    <div className='bg-light rounded ms-3 my-5 p-2 h-auto' style={{width:"40%"}}>
                        <h2 className='card-title'>Cuide de um Pet em qualquer lugar do mundo</h2>
                        <p className='card-text'>
                            Agende sua estadia e cuide de um pet em qualquer
                            lugar do mundo!
                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div className='my-3'>
                    <img
                        src={logo}
                        alt='homepets logo'
                        width='80px'
                        height='80px'
                    />
                    <img
                        src={brandName}
                        alt='homepets logo'
                        width='148.57px'
                        height='80px'
                    />
                </div>
                <p>This is the homepage</p>
                <div className='d-flex flex-column align-items-center'>
                    <Link className='btn btn-lg btn-primary' to='/auth/signup'>
                        Signup here!
                    </Link>
                    <Link
                        className='mt-2 btn btn-lg btn-warning'
                        to='/auth/login'
                    >
                        Login here!
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
