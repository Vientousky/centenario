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
                        <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#434343"><path d="m472-312 56-56-128-128v-184h-80v216l152 152Zm248 172v-88q74-35 117-103t43-149q0-81-43-149T720-732v-88q109 38 174.5 131.5T960-480q0 115-65.5 208.5T720-140Zm-360 20q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T0-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T360-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T720-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T360-120Zm0-80q117 0 198.5-81.5T640-480q0-117-81.5-198.5T360-760q-117 0-198.5 81.5T80-480q0 117 81.5 198.5T360-200Zm0-280Z" /></svg>
                        <p>Horarios y Turnos</p>
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
                        <p>Materia Deudadas</p>
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
                                <h2>{item.titulo}</h2>
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
