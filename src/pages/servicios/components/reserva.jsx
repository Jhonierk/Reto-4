import React, { useEffect } from 'react';
import $ from "jquery"
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Reserva() {
    useEffect(() => {
        $("#modalReserva").on("show.bs.modal", function (event) {
            const button = $(event.relatedTarget);
            const service = button.data("service");
            const modal = $(this);
            const formReservation = $("#formReserva");
            const btnCancel = $("#btnCancelar");

            modal.find(".modal-title").text("Reserva de " + service);

            $('input[name="assistants"]').on("keypress", function (event) {
                if (
                    (event.which != 8 && event.which != 0 && event.which < 48) ||
                    event.which > 57
                ) {
                    event.preventDefault();
                }
            });

            formReservation.on("submit", function (event) {
                event.preventDefault();

                let formData = new FormData($(this)[0]);
                let data = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    assistants: formData.get("assistants"),
                    date: formData.get("date"),
                    time: formData.get("time"),
                    comments: formData.get("comments"),
                    service: service,
                };

                emailjs.init("user_5EBnjcadQYKcG9dJU2dJ6");

                emailjs.send("gmail", "reserva-servicio", data).then(
                    function (response) {
                        if (response.text === "OK") {
                            $("#modalReserva").modal("hide");
                            Swal.fire({
                                icon: "success",
                                title: "El correo se ha enviado de forma exitosa",
                                text: "Revise su bandeja de entrada",
                                showConfirmButton: false,
                                timer: 3000,
                            });
                        }
                        formReservation[0].reset();
                        console.log(
                            "SUCCESS. status=%d, text=%s",
                            response.status,
                            response.text
                        );
                    },
                    /* function (err) {
                        footer;
                         Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Ocurrió un problema al enviar el correo",
                        });
                        console.log("FAILED. error=", err);
                    } */
                );
            });

            modal.on("hidden.bs.modal", function (event) {
                formReservation[0].reset();
                formReservation.off("submit");
            });
        });
    });


    return (
        <div class="modal fade" id="modalReserva" tabindex="-1" data-backdrop="static">
            <div class="modal-dialog modal-lg">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <form class="col-12" id="formReserva">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Nombre completo" required name="name"
                                                minlength="15" maxlength="40" pattern="([a-zA-ZáéíóúÁÉÍÓÚñÑ]+[ ]+[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+)+" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Correo electrónico" required name="email"
                                                minlength="10" maxlength="40" />
                                        </div>
                                        <div class="form-group">
                                            <input type="tel" class="form-control" placeholder="Télefono" required name="phone"
                                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
                                        </div>
                                        <div class="form-group">
                                            <input type="number" class="form-control" placeholder="Número de personas" required
                                                name="assistants" min="2" max="15" />
                                        </div>
                                        <div class="form-group">
                                            <label for="date">Fecha</label>
                                            <input type="date" class="form-control" required name="date" />
                                        </div>
                                        <div class="form-group">
                                            <label for="time">Hora</label>
                                            <input type="time" class="form-control" required name="time" />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" rows="5" placeholder="Solicitudes adicionales" name="comments"
                                                minlength="0" maxlength="100"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" form="btnCancelar" data-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-danger" form="formReserva">Confirmar reserva</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}