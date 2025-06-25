import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../components/styles/CustomStyles.css'
import ConsultForm from '../components/ConsultForm'

const Contact = () => {

    return (
        <>
            <Header />
            <Nav />
            <div className='about'>
                <h2>Contáctanos</h2>
                <p>Visítanos en nuestra tienda o contáctanos en nuestras redes sociales para obtener más información sobre nuestros productos y servicios. 
                   Estamos aquí para ayudarte con todas tus necesidades eléctricas.</p>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-info mt-md-28 mt-sm-28">
                                <ul>
                                    <li><i className="fa fa-envelope"></i>materiales.electricos@gmail.com</li>
                                    <li><i className="fa fa-phone"></i>(011) 15 1111 1111</li>
                                    <li><i className="fa fa-map-marker"></i>Dirección: CABA</li>
                                </ul>
                                <div className="social-icons">
                                    <h5>Redes</h5>
                                    <a href="https://www.facebook.com/" target="_blank" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fab fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fab fa-instagram"></i></a>
                                    <a href="https://x.com/" target="_blank" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fab fa-x-twitter"></i></a>                                    
                                </div>
                                <div className="working-time">
                                    <h3>Horarios de atención</h3>
                                    <p><span>Lunes a Viernes:</span>8 a 13 hs y 15 a 19 hs
                                    <br></br> <span>Sábados:</span>8 a 13 hs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="container">
                                <iframe id="map_content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.47496267362!2d-58.598110707791!3d-34.615430351304354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1747082815019!5m2!1ses!2sar"
                                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            <ConsultForm />
            <Footer />
        </>
    )
}

export default Contact