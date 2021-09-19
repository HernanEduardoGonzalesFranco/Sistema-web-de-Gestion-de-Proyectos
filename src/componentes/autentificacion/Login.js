import React, { useState} from 'react';
import {Link} from 'react-router-dom';

const Login = ()=>{
    const [usuario, guardarUsuario]= useState({
        email:'',
        password:''
    })
    
    const {email, password}=usuario;
    //la funcion handleInputChange tendra un estado (e) el cual sirve para ir ingresando datos a nuestro estado ya creado
    //setUsuario tomando como dato el nombre ingresado en nuestro input
    const onChange = e =>{ 
        guardarUsuario({ 
            ...usuario,
            [e.target.name]:e.target.value})
    }
    //cuando el usuario quiere iniciar sesion//
    const onSubmit=e=>{
        e.preventDefault();
        if(email.trim()===' '|| password.trim()===' '){
            alert('Todos los campos son obligatorios')
        }else {
            window.location.href="/proyectos"
        }
    }
    return (

        <div className="container">
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                <div className="card border-dark border-2 bg-gradient bg-danger">
                  <div className="card-body">
                   <h2 className="text-center">Iniciar Sesion</h2>
                   <form onSubmit={onSubmit}>
                       <div className='row'>
                       <div className='col-md-12'>
                           <div className="input-group mb-3">
                               <div className="input-group-prepend">
                                   <span className="input-group-text text-white">💌: </span>
                                  </div>
                                     <input
                                         type="email"
                                         className="form-control"
                                         placeholder="Ingrese su email"
                                         name="email" required
                                         aria-describedby="basic-addon1"
                                         value={email}
                                         onChange={onChange}
                                         />
                                   </div>
                               </div>
                           </div>
                           <div className='row'>
                              <div className='col-md-12'>
                                 <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                        <span className="input-group-text text-green">👀:</span>
                                      </div>
                                      <input
                                         type="password"
                                         className="form-control"
                                         placeholder="Tu password"
                                         name="password" required
                                         aria-describedby="basic-addon2"
                                         value={password}
                                         onChange={onChange}
                                         />
                                   </div>
                               </div>
                           </div>
                           <div className='row'>
                               <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
                                    <div className="campo-form">
                                        <input type="submit" className="btn btn-dark btn-gradient " value="Iniciar Sesion"/>
                                    </div>
                                  <div className='col-md-6 text-center'>
                                    <Link to={'/cuenta'} className="btn btn-outline-light btn-gradient">Obtener cuenta</Link>
                                  </div>
                                </div>
                            </div>        
                </form>
            </div>
        </div>
    </div>
</div>
</div> 
    )

}
export default Login;