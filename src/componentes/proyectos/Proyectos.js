import React from 'react'
import Header from '../plantillas/Header'
import MenuVertical from '../plantillas/MenuVertical'
import MostrarTareas from '../tareas/MostrarTareas'
const Proyectos = () => {
    return(
        <div className="container-fluid">
        <div className="row min-vh-100 text-white">
            <div className="col-md-3 bg-secondary bg-gradient m-0 p-0">
                <MenuVertical/> 

            </div>
            <div className="col-md-9 bg-secondary bg-white m-0 p-0">
                 <Header/> 

                <main>
                    <div className="text-center mt-5 bg-light text-dark m-0 p-0">
                        <MostrarTareas/>

                    </div>
                </main>
            </div>
        </div>
    </div>    
    )
}

export default Proyectos;