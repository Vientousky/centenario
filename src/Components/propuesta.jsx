import React from 'react'
import './central.css';


export const Propuestas = () => {
    return (

        <>

        {/* Este apartado todabia le hace falta el modal para cada uno de los elementos  */}

            <section id='Propuesta' className='Secti-pro'>

                <div>
                <h1>Propuestas Academicas</h1>
                </div>

                <div className="card">

                    <div className="sub-card">
                        <img src="/fotica.jpg" alt="foto" />
                        <h3>Una amplia Propuesta</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, minima consequuntur magni pariatur eos laudantium aut, mollitia quisquam qui iste error culpa iure totam!</p>
                        <button className='btn-card'>Conocer mas</button>
                    </div>
                    <div className="sub-card">
                        <img src="/fotica.jpg" alt="algo" />
                        <h3>Tenemos grandes</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, minima consequuntur magni pariatur eos laudantium aut, mollitia quisquam qui iste error culpa iure totam!</p>
                        <button className='btn-card'>Conocer mas</button>
                    </div>
                    <div className="sub-card">
                        <img src="/fotica.jpg" alt="i nose" />
                        <h3>Algo mas que tenemos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, minima consequuntur magni pariatur eos laudantium aut, mollitia quisquam qui iste error culpa iure totam!</p>
                        <button className='btn-card'>Conocer mas</button>
                    </div>
                </div>

            </section>
        </>

    )
}