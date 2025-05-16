import { useContext } from 'react'
import TripContext from '../context/TripContext'

function HomePage() {
    console.log('homepage')

    const { ArrayTrip } = useContext(TripContext)

    console.log(ArrayTrip)

    return (
        <>


        </>
    )
}

export default HomePage