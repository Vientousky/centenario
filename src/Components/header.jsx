import React, { useState, useEffect } from 'react';
import './central.css';

export const Header = () => {
    const [isSolid, setIsSolid] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setIsSolid(window.scrollY > 80);

            const sections = document.querySelectorAll('section');
            let currentSection = 'Home';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 80) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
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

    return (
        <>
            <header className={`hd-menu ${isSolid ? 'solid' : ''}`}>
                <div className='lg' onClick={() => window.location.href = "#Home"}>
                    <img src="/school.png" alt="Fotica" />
                    <h2>E.E.N°59</h2>
                </div>

                <nav className={`nv-ul ${menuOpen ? 'active' : ''}`}>
                    <ul className='ul-li'>
                        <li className={activeSection === 'Home' ? 'active' : ''}><a href="#Home" onClick={() => setMenuOpen(false)}>Inicio</a></li>
                        <li className={activeSection === 'Nosotros' ? 'active' : ''}><a href="#Nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
                        <li className={activeSection === 'Propuesta' ? 'active' : ''}><a href="#Propuesta" onClick={() => setMenuOpen(false)}>Propuesta</a></li>
                        <li className={activeSection === 'Preguntas' ? 'active' : ''}><a href="#Preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a></li>
                        <li className={activeSection === 'Contacto' ? 'active' : ''}><a href="#Contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
                    </ul>
                </nav>

                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </header>
        </>
    );
};