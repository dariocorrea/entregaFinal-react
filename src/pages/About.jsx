import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../components/styles/CustomStyles.css'


const About = () => {

    return (
        <>
            <Header />
            <Nav />
            <div className='about'>
                <h2>Sobre Nosotros</h2>
                <p>Somos una empresa familiar con más de 30 años de experiencia en la venta de materiales eléctricos de alta calidad.
                    Nuestro compromiso es ofrecer productos confiables y un servicio excepcional a nuestros clientes.
                    Desde cables y conductores hasta herramientas y equipos de iluminación, contamos con una amplia gama de productos para satisfacer todas tus necesidades eléctricas.</p>
                <h4>Nuestra Misión</h4>
                <p>Nuestra misión es proporcionar soluciones eléctricas eficientes y seguras, contribuyendo al desarrollo sostenible de nuestra comunidad. Nos enorgullece ser un negocio familiar que valora la honestidad, la integridad y la satisfacción del cliente.</p>
            </div>
            <Footer />
        </>
    )
}

export default About