import React from 'react'
import './central.css';


export const Header = () => {
    return (

        <>
            <header className='hd-menu'>

                <div className='lg'>
                <img src="/Logo.jpg" alt="Fotica" />
                </div>

                <nav className='nv-ul'>
                    <ul className='ul-li'>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Servicios</a>
                        </li>
                        <li>
                            <a href="#">Nosotros</a>
                        </li>
                        <li>
                            <a href="#">Preguntas</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </nav>

                

            </header>
        </>

    )
}
