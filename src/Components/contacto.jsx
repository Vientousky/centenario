import React from 'react';
import './central.css';

export const Contacto = () => {
    return (
        <section id="Contacto" className="secti-conta">

            <h1>Eu no se me enoje Mañana lo termino</h1>

            <div className="izq-info">

                <div className="card-info">
                    <div className="item-card">
                        <h2><span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                            </svg></span>Teléfono</h2>
                    </div>

                    <div className="item-card">
                        <h2><span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                            </svg></span>Correo</h2>
                    </div>

                    <div className="item-card">
                        <h2><span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                            </svg></span>Ubicación</h2>
                    </div>
                </div>

                <div className="izq-maps">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.1931562060324!2d-60.417347671493616!3d-26.790762035417305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94412d40dc3a8151%3A0xbaf45023ea3b3301!2sE.E.S%20N*2A%2059!5e0!3m2!1ses!2sar!4v1728484040858!5m2!1ses!2sar" 
                        width="600" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            {/* Tabla de Horarios */}
            <div className="tabla-horarios">
                <h2>Horarios y Contactos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Turno</th>
                            <th>Horario</th>
                            <th>Responsable</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mañana</td>
                            <td>8:00 AM - 12:00 PM</td>
                            <td>Director General</td>
                        </tr>
                        <tr>
                            <td>Tarde</td>
                            <td>1:00 PM - 5:00 PM</td>
                            <td>Vice-Director</td>
                        </tr>
                        <tr>
                            <td>Vespertino</td>
                            <td>6:00 PM - 9:00 PM</td>
                            <td>Vice-Director</td>
                        </tr>
                    </tbody>
                </table>
                <p>Si no hay director disponible, por favor contacte a la Preceptoría o Administración.</p>
            </div>
        </section>
    );
};
