import React from 'react'

const Proyecto =({proyectos}) => {

    return(
        /* Lo unico que hace es presentar un proyecto recibiendo lo datos del arreglo 'proyecto'
        el cual esta ubicado en el componente MenuVertical */
        <button className="list-group-item list-group-item-action list-group-item-secundary"
        
        type="button"
        
        >{proyectos.nombre } </button>
    
        )
}

export default Proyecto;