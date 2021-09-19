import  React,{useState} from 'react'
import Proyecto from './Proyecto'
import CrearProyecto from './CrearProyecto'

const MostrarProyecto = () => {
    const [Proyectos, setProyectos]= useState([
        // proyectos es un arreglo que almacenara todos los proyectos que vayamos ingresando
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de un sitio web'}
        ])

    const NuevoProyecto = name => {
        if(name===''){
            alert("campos vacios")
            return;
        }
        if(Proyectos.find(Proy => Proy.nombre=== name)){
            setProyectos([...Proyectos, {nombre: name}])
        }else{
            alert("El nombre ingresado ya existe")
        }
    }
    return(
        <div>
            <CrearProyecto Nuevo={NuevoProyecto}/>
            <h3 className= "text-light border-button fw-bold">Panel de Control</h3>
        <div className="list-group">
            {Proyectos.map(proyecto =>(
          /*       //aqui se recorreran todos los datos que contenga el arreglo proyectos y por cada dato se llamara al componente proyecto
                y se ingresara */
                <Proyecto proyectos={proyecto}/>
                
            ))}
        </div>
        </div>
    )

}

export default MostrarProyecto