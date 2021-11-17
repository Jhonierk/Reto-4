import React from "react";

export default function modal() {
    return (
        <div className="modal fade" id="modalReserva" tabindex="-1" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className=" modal.reservamodal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Reserva del menú</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <form className="col-12" id="formReserva">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Nombre completo" required name="name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" required name="email"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-danger" form="formReserva">Confirmar reserva</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}