import Tarea from './Tarea'
import FormularioTareas from './FormularioTarea'
import  React,{Fragment, useState} from 'react'
const MostrarTareas = () => {
    /* Crea un objeto tareas*/
    const [tarea,setTareas]= useState([
        {nombre:'Elegir Sistema Operativo', estado:true},
        {nombre:'Elegir Base de datos', estado:false},
        {nombre:'Elegir Lenguaje', estado:true},
        {nombre:'Elegir Frameworks', estado:false}
    ])
    const CreateNue = name => {
        if (name === ''){
            alert("Los campos vacios")
            return;
        }if (!tarea.find(Task => Task.nombre === name)){
            setTareas([...tarea,{nombre:name,estado:false}])
            return;
        }else{
            alert("El nombre de esa tarea ya existe")
        }
    }


return(
    <Fragment>
        <div className="d-flex justify-content-center mb-4">
                    <div className="col-md-6">
                        <FormularioTareas crear= {CreateNue}/>
                    </div>
                </div>
            <div className="bg-light min-vh-100">
                <div className="">
                    <div className="d-flex justify-content-center">
                        <h2><span className="text-danger">Proyecto:</span> Comercio Electrónico</h2>
                        <button type="button" className="btn btn-danger"> Eliminar Proyecto </button>
                    </div>
                    {tarea.length===0 ?
                        (<h1>Sin Tarea</h1>):
                        (<div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Tarea</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Editar</th>
                                        <th scope="col">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tarea.map(elemento =>
                                        (<Tarea elemento = {elemento}/>   
                                    ))}
                                </tbody>
                            </table>
                        </div>)
                    }
                </div>
            </div>

        </Fragment>

    )
            
}
export default MostrarTareas;