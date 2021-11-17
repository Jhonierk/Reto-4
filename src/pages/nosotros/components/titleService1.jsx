import React from "react";

export default function titleService1(props) {
    return(
        <div class="history" id="historia">
            <div class="container mt-5 mb-5">
            <div class="col-16 ">
            <div class="row row-cols-2">

            <div class="text-h4">
                    <h4>{props.titleService}</h4>
            </div>

            <div class="text-h1">
                    <h1>{props.titleService}</h1>
            </div>


            </div>
            </div>
            </div>
        </div>
    )
}