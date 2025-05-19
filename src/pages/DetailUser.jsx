import { useContext, useState } from "react";
import TripContext from "../context/TripContext";
import { useParams } from "react-router-dom";

function DetailUser() {
  const { id } = useParams();
  const { ArrayTrip } = useContext(TripContext);

  const currentTrip = ArrayTrip && ArrayTrip[id - 1];

  if (!currentTrip) {
    return <div>Caricamento o dati non disponibili...</div>;
  }

  const [partecipantsList, setPartecipantsList] = useState(currentTrip.partecipants);
  const [filterName, setFilterName] = useState('');

  function searchName(e) {
    e.preventDefault();

    const allPartecipants = currentTrip.partecipants;

    if (filterName.trim() !== '') {
      const filtered = allPartecipants.filter(p =>
        `${p.name} ${p.surname}`.toLowerCase().includes(filterName.toLowerCase())
      );
      setPartecipantsList(filtered);
    } else {
      setPartecipantsList(allPartecipants);
    }
  }

  return (
    <div className="container my-4">
      <form onSubmit={searchName} className="row g-3 mb-3">
        <div className="col-md-8">
          <input
            value={filterName}
            onChange={e => setFilterName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Cerca partecipante"
          />
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary w-100">Cerca</button>
        </div>
      </form>

      {partecipantsList.length > 0 ? (
        partecipantsList.map((e) => (
          <div key={e.user_id} className="card text-center mb-4">
            <div className="card-header">{`${e.surname} ${e.name}`}</div>
            <div className="card-body">
              <p className="card-text">Email: {e.email}</p>
              <p className="card-text">Numero di telefono: {e.phone_number}</p>
              <p className="card-text">Codice Fiscale: {e.CF}</p>
            </div>
          </div>
        ))
      ) : (
        <h4>Nessun partecipante trovato</h4>
      )}
    </div>
  );
}

export default DetailUser;
