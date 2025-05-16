import { useContext } from 'react'
import TripContext from '../context/TripContext'

function HomePage() {
    console.log('homepage')

    const { ArrayTrip } = useContext(TripContext)

    console.log(ArrayTrip)

    return (
        <>
            {ArrayTrip ? (ArrayTrip.map((e) => (<div key={e.id}>{e.destination}</div>))) : <div><h1>Nessun Viaggio disponibile</h1></div>}


        </>
    )
}

export default HomePage