import React from 'react';
import './central.css';

export const Propuestas = () => {
    return (
        <>
            {/* Este apartado todavía le hace falta el modal para cada uno de los elementos */}

            <section id='Propuesta' className='Secti-pro'>
                <div className='txt'>
                    <h1>Propuestas Académicas</h1>
                </div>

                <article className='Arti-card'>
                    <div className='sub-card'>
                        <figure className='fi-img'>
                            <img src="" alt="Descripción de la imagen" />
                        </figure>

                        <div className='Conte'>
                            <h2>Título</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque, delectus numquam libero nulla odit explicabo asperiores ea fuga recusandae?</p>
                            <a href="#" className="read-more">
                                Leer más <span className="sr-only">acerca de este título</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <article className='Arti-card'>
                    <div className='sub-card'>
                        <figure className='fi-img'>
                            <img src="" alt="Descripción de la imagen" />
                        </figure>

                        <div className='Conte'>
                            <h2>Título</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque, delectus numquam libero nulla odit explicabo asperiores ea fuga recusandae?</p>
                            <a href="#" className="read-more">
                                Leer más <span className="sr-only">acerca de este título</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <article className='Arti-card'>
                    <div className='sub-card'>
                        <figure className='fi-img'>
                            <img src="" alt="Descripción de la imagen" />
                        </figure>

                        <div className='Conte'>
                            <h2>Título</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque, delectus numquam libero nulla odit explicabo asperiores ea fuga recusandae?</p>
                            <a href="#" className="read-more">
                                Leer más <span className="sr-only">acerca de este título</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

            </section>

            <dialog>
                {/* Aqui deberia ir un modan en el futuro  */}
            </dialog>
        </>
    );
}