import React from "react";

const Pagina3 = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <table className="table table-light table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">link</th>
                                <th scope="col">persona</th>
                                <th scope="col">descripción</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr>
                                <th scope="row">1</th>
                                <td>http://medicamentos.com</td>
                                <td>Angela Maria</td>
                                <td>Link para encontrar el dashboard actualizado</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>http://medicamentos1.com</td>
                                <td>Adriana Monsalve</td>
                                <td>Link para encontrar las ventas realizadas el día de ayer</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-6">
                    <img src="https://images.ctfassets.net/3klebcd0t2ch/SItE90bdiQYnha82s4kml/7bf47e434a054e8f781cac80bfd018b3/SSAL6436_Pantallas_TV_Salud_Neiva_Banner_home.jpg" alt="Descripción de la imagen" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Pagina3;