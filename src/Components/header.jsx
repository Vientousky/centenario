import React, { useState, useEffect } from 'react'; 
import './central.css';

export const Header = () => {
    const [isSolid, setIsSolid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Ajusta este valor a mis semejansas
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

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className={`hd-menu ${isSolid ? 'solid' : ''}`}>
                <div className='lg' onClick={() => window.location.href = "#Home"}>
                    <img src="/school.png" alt="Fotica" />
                    <h3>Bachi 73</h3>
                </div>

                <nav className={`nv-ul ${menuOpen ? 'active' : ''}`}>
                    <ul className='ul-li'>
                        <li><a href="#Home" onClick={() => setMenuOpen(false)}>Inicio</a></li>
                        <li><a href="#Propuesta" onClick={() => setMenuOpen(false)}>Propuesta</a></li>
                        <li><a href="#Nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
                        <li><a href="#Preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a></li>
                        <li><a href="#Contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
                    </ul>
                </nav>

                <button 
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
                    onClick={() => setMenuOpen(!menuOpen)}
                ></button>
            </header>
        </>
    );
};