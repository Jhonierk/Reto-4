import React from "react";

export default function personal(props) {
  return (
            <div className="">
              <div className="row justify-content-center">
                <img src={props.img} class="img-fluid rounded-circle img-thumbnail img-center mb-2"
                  width="200px" alt="personal"></img>
              </div>
              <h4>{props.name}</h4>
              <img src={props.separator} class=" separador" alt="separador"></img>
              <p className="text text-center">{props.rank}</p>
            </div>
  )
}