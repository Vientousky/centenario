import React, { useState, useEffect } from 'react';
import './central.css';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {

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

    useEffect(() => {
        // Ejecutar handleScroll al cargar la página
        handleScroll();

        // Agregar el evento de scroll
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
            <header className='hd-menu'>
                
                <div className='lg' onClick={() => handleLinkClick(new Event('click'), 'Home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                    </svg>
                    <h2>E.E.S N°59</h2>
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
