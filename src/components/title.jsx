import React from 'react'

export default function title(props) {
    return (
        <section>
            <div className="container mg-title mb-5">
                <div className="row ml-4">
                    <h2 className="pedido-title font-weight-bold">{props.title}</h2>
                </div>
            </div>
        </section>
    )
}
