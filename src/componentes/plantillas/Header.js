import React,{useState} from 'react'

const Header =() => {
    const [usuario, setUser] = useState({id:1, nombre:null})
    const login=()=>{
        setUser({id:1, nombre:"Hernan Gonzales"})
    }
    const logout =()=>{
        setUser(null)
    }
    return(
        <header className='navbar navbar-light bg-success bg-gradient' >
          <div className="container-fluid"> 
            <span className="d-grid gap-2 d-md-flex justify-content-md-end">User:{usuario ? usuario.nombre: "Usuario Desconocido"}</span>
            {usuario
             ?(<button
                className="btn btn-outline-light-success text-light"
                type="button" 
                onClick={logout}
                >Cerrar Sesion
              </button>)
            :(<button
                className="btn btn-outline-light-success text-light"
                type="button" 
                onClick={login}
                >Iniciar Sesion
              </button>)
            }
          </div>
       </header>

    )
        }

export default Header