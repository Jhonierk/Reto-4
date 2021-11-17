import React from 'react'
import "./login.css"

export default function Login() {
    return (
        <div className="background">
            <div className="panel">
                <form className="form-signin">
                    <h2 className="d-flex justify-content-center text-dark">Login</h2>
                    <div className="form-label-group mt-5">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Corre electronico" required="" autofocus=""/>
                    </div>
                    <div className="form-label-group my-3">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required="" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Recuerdame</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                </form>
            </div>
        </div>
    )
}
