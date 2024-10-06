import React, { useState, useEffect } from 'react';
import './central.css';

export const Header = () => {
    const [isSolid, setIsSolid] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Función para manejar el scroll y cambiar la sección activa según el scroll
        const handleScroll = () => {
            setIsSolid(window.scrollY > 15);

            const sections = document.querySelectorAll('section');
            let currentSection = 'Home'; // Sección predeterminada

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 80) {
                    currentSection = section.getAttribute('id');
                }
            });

            // Solo cambiar la sección activa si la sección actual existe
            if (document.getElementById(currentSection)) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);

    // Función para manejar el clic en los enlaces
    const handleLinkClick = (e, sectionId) => {
        e.preventDefault(); // Previene el comportamiento predeterminado
        const section = document.getElementById(sectionId);

        if (section) {
            setMenuOpen(false); // Cierra el menú
            section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave

            // Cambiar la sección activa después de un pequeño retardo para evitar titileo
            setTimeout(() => {
                setActiveSection(sectionId); // Establece la sección activa
            }, 300); // Espera a que el scroll termine
        } else {
            console.warn(`Sección con ID ${sectionId} no encontrada.`);
        }
    };

    return (
        <>
            <header className={`hd-menu ${isSolid ? 'solid' : ''}`}>
                <div className='lg' onClick={() => handleLinkClick(new Event('click'), 'Home')}>
                    <img src="/school.png" alt="Fotica" />
                    <h2>E.E.N°59</h2>
                </div>

                <nav className={`nv-ul ${menuOpen ? 'active' : ''}`}>
                    <ul className='ul-li'>
                        <li className={activeSection === 'Home' ? 'active' : ''}>
                            <a href="#Home" onClick={(e) => handleLinkClick(e, 'Home')}>Inicio</a>
                        </li>
                        <li className={activeSection === 'Nosotros' ? 'active' : ''}>
                            <a href="#Nosotros" onClick={(e) => handleLinkClick(e, 'Nosotros')}>Nosotros</a>
                        </li>
                        <li className={activeSection === 'Propuesta' ? 'active' : ''}>
                            <a href="#Propuesta" onClick={(e) => handleLinkClick(e, 'Propuesta')}>Propuesta</a>
                        </li>
                        <li className={activeSection === 'FAQ' ? 'active' : ''}>
                            <a href="#FAQ" onClick={(e) => handleLinkClick(e, 'FAQ')}>Preguntas</a>
                        </li>
                        <li className={activeSection === 'Contacto' ? 'active' : ''}>
                            <a href="#Contacto" onClick={(e) => handleLinkClick(e, 'Contacto')}>Contacto</a>
                        </li>
                    </ul>
                </nav>

                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen ? "true" : "false"}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </header>
        </>
    );
};
