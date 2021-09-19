import React from 'react'
//Ponemos como parametro el objeto tarea que se encuentra en el componente MostrarTarea
const Tarea = ({elemento}) =>{

    return(
        <tr>
            {/* Presenta el nombre de la tarea y el estado, en caso de el estado 
            tener un valor de true significa que esta completa y presenta todos los datos de esta en caso del estado tener valor
            de falso presentara un mensaje de error señalando que esta incompleta */}
            <td>{elemento.nombre}</td>
            <td>{elemento.estado?
                   (<button className="btn btn-success">Completada</button>)
                  :(<button className="btn btn-warning">Incompleta</button>)}</td>
            <td><button className="btn btn-outline-success">Editar</button> </td>
            <td><button className="btn btn-outline-danger">Eliminar</button></td>
        </tr>
    )
}
export default Tarea;