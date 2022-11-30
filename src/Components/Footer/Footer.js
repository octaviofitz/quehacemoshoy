import React from 'react';
import '../Footer/footer.css'
import Mail from '../../img/Iconos/mail.svg'
import Instagram from '../../img/Iconos/ig.svg'

function Footer() {
    return (
        <section className='footer'>
            <div>
            <h5 className='titulo'>¿QuéHacemosHoy?</h5>
            </div>
            <div className='container-lista'>
                <nav>
                    <ul className='lista'>
                        <li><img src={Instagram} alt='Instagram' className='iconos' /></li>
                        <li><img src={Mail} alt='Correo' className='iconos'/></li>
                </ul>
                </nav>
            </div>
        </section>
    );
}

export default Footer;