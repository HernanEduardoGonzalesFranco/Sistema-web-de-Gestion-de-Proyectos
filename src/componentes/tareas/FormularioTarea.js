import React,{useState} from 'react'

const FormularioTarea = ({crear}) =>{

    const [Nuevatarea, setNuevatarea] = useState('')

    const NuevaTa = e => setNuevatarea(e.target.value)

    const Click = () =>{
        crear(Nuevatarea)
        setNuevatarea('')
    }
    return(
        <div className="border border-light mt-2">
            <h2 className="text-success fw-bold fs-1 text-center ">Formulario Tareas</h2>
            <form className="">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text text-danger fs-2 fw-bold"><img src="https://img.icons8.com/cute-clipart/35/000000/task.png"/></span>
                            </div>
                            <input
                                 type="text"
                                 className="form-control fs-2"
                                 placeholder="Nueva Tarea"
                                 name="tarea"
                                 value={Nuevatarea}
                                 onChange= {NuevaTa}
                            />
                        </div>
                   </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center mb-4'>
                        <div className="d-grid">
                            <button type="buttom" className="btn btn-success fw-bold fs-2" onClick={Click}> Guardar Tarea</button>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    )

}
export default FormularioTarea;