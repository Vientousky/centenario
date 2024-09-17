import React, { useState, useEffect } from 'react';
import './central.css';

export const Header = () => {
    const [isSolid, setIsSolid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // este valor lo ajusto a mi gusto jajajjajaja
                setIsSolid(true);
            } else {
                setIsSolid(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`hd-menu ${isSolid ? 'solid' : ''}`}>  
                <div className='lg'>
                    <img src="/school.png" alt="Fotica" />
                    <h3>Escuela del Centenario</h3>
                </div>

                <nav className='nv-ul'>
                    <ul className='ul-li'>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Preguntas</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}