import React, { useState } from 'react';
import './central.css';
import faqData from './central.json';

export const FAQ = () => {
    const [categoriaActiva, setCategoriaActiva] = useState('Reglamentos');
    const [detallesAbiertos, setDetallesAbiertos] = useState({});

    // Función para cambiar la categoría activa y cerrar los detalles abiertos
    const handleCategoryClick = (categoria) => {
        setCategoriaActiva(categoria);
        setDetallesAbiertos({}); // Cierra todos los detalles sin importar si es la misma categoría
    };

    // Función para manejar el clic en un detalle
    const handleDetailClick = (index) => {
        setDetallesAbiertos((prevState) => ({
            ...prevState,
            [index]: !prevState[index] // Alternar estado de apertura/cierre
        }));
    };

    return (
        <>
            <section id='FAQ' className='secti-FAQ'>

                <div className='txt-center'>
                    <h1 className='txt-fs-h1'>Preguntas frecuentes</h1>
                </div>

                {/* Selección de categorías */}
                <div className="categorias" id='categorias'>
                    <div
                        className={`categoria ${categoriaActiva === 'Reglamentos' ? 'activa' : ''}`}
                        onClick={() => handleCategoryClick('Reglamentos')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z" /></svg>
                        <p>Reglamentos y Sanciones</p>
                    </div>

                    <div
                        className={`categoria ${categoriaActiva === 'HorariosTurnos' ? 'activa' : ''}`}
                        onClick={() => handleCategoryClick('HorariosTurnos')}>
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M609.91-766.67q-18.24 0-30.74-12.59t-12.5-30.83q0-18.24 12.59-30.74t30.83-12.5q18.24 0 30.74 12.59t12.5 30.83q0 18.24-12.59 30.74t-30.83 12.5Zm0 660q-18.24 0-30.74-12.59t-12.5-30.83q0-18.24 12.59-30.74t30.83-12.5q18.24 0 30.74 12.59t12.5 30.83q0 18.24-12.59 30.74t-30.83 12.5Zm160-520q-18.24 0-30.74-12.59t-12.5-30.83q0-18.24 12.59-30.74t30.83-12.5q18.24 0 30.74 12.59t12.5 30.83q0 18.24-12.59 30.74t-30.83 12.5Zm0 380q-18.24 0-30.74-12.59t-12.5-30.83q0-18.24 12.59-30.74t30.83-12.5q18.24 0 30.74 12.59t12.5 30.83q0 18.24-12.59 30.74t-30.83 12.5Zm60-190q-18.24 0-30.74-12.59t-12.5-30.83q0-18.24 12.59-30.74t30.83-12.5q18.24 0 30.74 12.59t12.5 30.83q0 18.24-12.59 30.74t-30.83 12.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880v66.67q-139.33 0-236.33 96.87-97 96.88-97 236.46t96.87 236.46q96.88 96.87 236.46 96.87V-80Zm132-221.33L446.67-466.67v-206.66h66.66v180.3L658.67-348 612-301.33Z"/></svg>                        <p>Horarios y Turnos</p>
                    </div>

                    <div
                        className={`categoria ${categoriaActiva === 'InscripcionesPases' ? 'activa' : ''}`}
                        onClick={() => handleCategoryClick('InscripcionesPases')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M320-160q-33 0-56.5-23.5T240-240v-120h120v-90q-35-2-66.5-15.5T236-506v-44h-46L60-680q36-46 89-65t107-19q27 0 52.5 4t51.5 15v-55h480v520q0 50-35 85t-85 35H320Zm120-200h240v80q0 17 11.5 28.5T720-240q17 0 28.5-11.5T760-280v-440H440v24l240 240v56h-56L510-514l-8 8q-14 14-29.5 25T440-464v104ZM224-630h92v86q12 8 25 11t27 3q23 0 41.5-7t36.5-25l8-8-56-56q-29-29-65-43.5T256-684q-20 0-38 3t-36 9l42 42Zm376 350H320v40h286q-3-9-4.5-19t-1.5-21Zm-280 40v-40 40Z" /></svg>
                        <p>Inscripciones y Pases</p>
                    </div>

                    <div
                        className={`categoria ${categoriaActiva === 'MateriaDeudadas' ? 'activa' : ''}`}
                        onClick={() => handleCategoryClick('MateriaDeudadas')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M80-160v-80h800v80H80Zm80-160v-320h80v320h-80Zm160 0v-480h80v480h-80Zm160 0v-480h80v480h-80Zm280 0L600-600l70-40 160 280-70 40Z" /></svg>
                        <p>Materia Pedientes</p>
                    </div>


                </div>

                {/* Sección de preguntas frecuentes */}
                <div className="listado-de-pregunta">
                    {faqData[categoriaActiva].map((item, index) => (
                        <details className='FAQ-destails'
                            key={index}
                            open={!!detallesAbiertos[index]} // Se controla manualmente la apertura
                            onClick={(e) => {
                                e.preventDefault(); // Prevenir el comportamiento predeterminado del navegador
                                handleDetailClick(index); // Controlar manualmente el estado de apertura
                            }}>
                            <summary className='FAQ-sumary'>
                                <h3>{item.titulo}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                            </summary>
                            <p>{item.descripcion}</p>

                        </details>
                    ))}
                </div>
            </section>
        </>
    );
};
