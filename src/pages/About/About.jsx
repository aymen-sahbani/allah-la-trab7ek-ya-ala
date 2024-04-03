import React from 'react';
import './About.css';
import './footer.css';
import './style.css' 
import logo from './logo.png';
import { Link } from 'react-router-dom';
import Aboutimg from './about.jpg';
function About() {
    const heroStyle = {
        backgroundImage: `url(${Aboutimg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
            <div className='about-page'>
                    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
                            <div class="imageBox">
                                    <a href="index.html">
                                            <img src="logo.png" alt="image-box" class="logo" style={{ marginLeft: '1rem', width: '300px', height: '100' }} />
                                    </a>
                            </div>
                            <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#nav"
                                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon bg-light"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="nav">
                                    <ul class="navbar-nav">
                                            <li class="item  "><Link to='/' class="link"><strong>ACCEUIL</strong> </Link> </li>
                                            <li class="item "><Link to='/coursesexams' class="link"><strong>COURS & EXAMENS</strong></Link> </li>

                                            <li class="item current "><Link to='/about' class="link"><strong>A PROPOS</strong></Link> </li>
                                            <li class="item"><Link to='/contact' class="link"><strong>CONTACT</strong></Link> </li>
                                    </ul>
                            </div>
                    </nav>
                <section id="hero" className="d-flex align-items-center" style={heroStyle}>
                    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                                    <h1>Découvrez  tous les outils et ressources
                                            nécessaires pour réussir et exceller dans
                                            votre parcours à l'ENSTAB </h1>
                            </div>
                    </section>   
                   
            </div>
    )
}

export default About;;