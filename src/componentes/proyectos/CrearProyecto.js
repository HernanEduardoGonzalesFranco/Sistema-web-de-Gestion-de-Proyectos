import React, { useState } from 'react'


const CrearProyecto = ({Nuevo}) => {
    //state para proyectos
    const [formulario, setFormulario] = useState(false)

    const activarFormulario = () => {
        setFormulario(!formulario)
    }

    const [proyecto, guardarProyecto] = useState('')
    const Valor= e => {guardarProyecto(e.target.value)} 

    const Click = () => {
        Nuevo(proyecto)
        guardarProyecto('')
    }

   
    return(
        <>
        <div className="d-grid pb-2">
            <button className="btn btn-outline-light text-waring fw-bold fs-2 pt-0"
                    type="button"
                    onClick={activarFormulario}
                    > Nuevo Proyecto</button>
        </div>
        { formulario
          ? (< form >
                 <div className='row'>
                     <div className='col-md-12'>
                         <div className="input-group my-2">
                             <div className="input-group-prepend">
                                 <span className="input-group-text text-danger fs-2 fw-bold"><img src="https://img.icons8.com/color/35/000000/group-of-projects.png"/></span>
                             </div>
                             <input
                                 type="text"
                                 className="form-control fs-2"
                                 placeholder="Nombre Proyecto"
                                 name="nombre"
                                 value={proyecto}
                                 onChange={Valor}
                             />
                         </div>
                     </div>
                 </div>
                 <div className='row'>
                     <div className='col-md-12 text-center mb-4'>
                         <div className="d-grid">
                         <button type="button" className="text-white btn btn-success fw-bold fs-2" onClick={Click}>Guardar Proyecto </button>
                         </div>
                     </div>
                 </div>
          </form>
          )
        : null
        }
        </>
    )
}

export default CrearProyecto