import React, { useRef} from 'react';
import './central.css';

export const Propuestas = () => {
   // Referencias a cada modal
   const modalidadesRef = useRef(null);
   const turnosRef = useRef(null);
   const equipoRef = useRef(null);
 
   // Función para abrir el modal correcto y bloquear el scroll
   const handleOpenModal = (modalRef) => {
     if (modalRef.current) {
       modalRef.current.showModal();
       document.body.classList.add('no-scroll'); // Bloquea el scroll en el body
     }
   };
 
   // Función para cerrar el modal correcto y habilitar el scroll
   const handleCloseModal = (modalRef) => {
     if (modalRef.current) {
       modalRef.current.close();
       document.body.classList.remove('no-scroll'); // Habilita el scroll de nuevo
     }
   };



    return (
        <>
            <section id='Propuesta' className='Secti-pro'>
                <div className='txt'>
                    <h1>Propuestas Académicas</h1>
                </div>

                <div className="card-container">

                    {/* Modalidades */}
                    <article className='Arti-card'>
                        <div className='sub-card'>
                            <figure className='fi-img'>
                                <img src="/prueba.jpeg" alt="Descripción de la imagen" />
                            </figure>

                            <div className='Conte'>
                                <h3>Modalidades</h3>
                                <p>Ofrecemos modalidades en Comunicación, Ciencias Sociales y Ciencias Naturales, además de Humanidades en horario nocturno. A partir de 3er año.</p>
                                <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); handleOpenModal(modalidadesRef); }}>
                                    <span className="sr-only">Saber más</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Turnos */}
                    <article className='Arti-card'>
                        <div className='sub-card'>
                            <figure className='fi-img'>
                                <img src="/prueba.jpeg" alt="Descripción de la imagen" />
                            </figure>

                            <div className='Conte'>
                                <h3>Turnos</h3>
                                <p>Los turnos que ofrecemos son: Turno Mañana (3, 4, 5 año), Turno Tarde (1 y 2 año) y Turno Vespertino. Cada uno se adapta a diferentes necesidades y estilos de vida.</p>
                                <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); handleOpenModal(turnosRef); }}>
                                    <span className="sr-only">Saber más</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Equipo de trabajo */}
                    <article className='Arti-card'>
                        <div className='sub-card'>
                            <figure className='fi-img'>
                                <img src="/prueba.jpeg" alt="Descripción de la imagen" />
                            </figure>

                            <div className='Conte'>
                                <h3>Equipo de trabajo</h3>
                                <p>Contamos con un equipo de profesionales adaptados y comprometidos con brindar la mejor experiencia educativa y experiencia a sus estudiantes.</p>
                                <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); handleOpenModal(equipoRef); }}>
                                    <span className="sr-only">Saber más</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>

                </div>

                {/* Modal de Modalidades */}
                <dialog className='modal' ref={modalidadesRef}>
                    <button className='btn-x' onClick={() => handleCloseModal(modalidadesRef)}>
                        <span className='x'></span>
                        <span className='x'></span>
                    </button>

                    <div className="sub-modal">
                        <h2>Modalidades</h2>
                        <hr />
                        <h3>Ciencias Sociales:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                        <hr />
                        <h3>Ciencias Naturales:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                        <hr />
                        <h3>Comunicacion:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                        <hr />
                        <h3>Humanidades</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                    </div>


                </dialog>

                {/* Modal de Turnos */}
                <dialog className='modal' ref={turnosRef}>
                    <button className='btn-x' onClick={() => handleCloseModal(turnosRef)}>
                        <span className='x'></span>
                        <span className='x'></span>
                    </button>

                    <div className="sub-modal">
                        <h2>Turnos</h2>
                        <hr />
                        <h3>Turno Mañana:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                        <hr />
                        <h3>Turno Tarde</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                        <hr />
                        <h3>Turno Vespertino</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                    </div>
                </dialog>

                {/* Modal de Equipo de trabajo */}
                <dialog className='modal' ref={equipoRef}>
                    <button className='btn-x' onClick={() => handleCloseModal(equipoRef)}>
                        <span className='x'></span>
                        <span className='x'></span>
                    </button>

                    <div className='sub-modal'>
                        <h2>Equipo de trabajo</h2>
                        <hr />
                        <h3>Profesores</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                        <hr />
                        <h3>Directores</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                        <hr />
                        <h3>Preceptores</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint vitae atque dolor culpa voluptatum sequi, delectus, quas impedit debitis eius, ea vero esse voluptates.</p>
                    </div>
                </dialog>


            </section>
        </>
    );
}
