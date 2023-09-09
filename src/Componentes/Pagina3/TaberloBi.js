import React from "react";

export const Pagina3 = () => {


    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">link</th>
                        <th scope="col">persona</th>
                        <th scope="col">descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>http://medicamentos.com</td>
                        <td>Angela Maria</td>
                        <td>Link para encontrar el dashboard actualizado</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>http//medicamentos1.com</td>
                        <td>Adriana Monsalve</td>
                        <td>Link para encontrar las ventas realizadas el dia de ayer</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Pagina3;