import { useParams } from "react-router-dom";
import { useContext } from "react";
import TripContext from "../context/TripContext";


function DetailUser() {

    const { id } = useParams();
    const { ArrayTrip } = useContext(TripContext);

    return (
        <div className="container my-4">
            <form className="row g-3 mb-3">
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cerca partecipante"
                    />
                </div>
                <div className="col-md-4">
                    <button type="submit" className="btn btn-primary w-100">
                        Cerca
                    </button>
                </div>
            </form>
            <div className="card text-center">
                <div className="card-header">Partecipante</div>
                <div className="card-body">
                    <h5 className="card-title">Nome</h5>
                    <p className="card-text">Email: </p>
                    <p className="card-text">Numero di telefono: </p>
                    <p className="card-text">Codice Fiscale: </p>
                </div>
            </div>
        </div>
    );
}

export default DetailUser;