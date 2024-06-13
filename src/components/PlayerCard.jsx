import { Link } from "react-router-dom"

function PlayerCard({player}) {
    const {id, fname, lname, classYear, location, dominantHand, contacted} = player
    
    return (
        <>
            <h2>{fname} {lname}</h2>
            <p>Class of {classYear}</p>
            <p>{dominantHand}</p>
            <p>{location}</p>
            <p>{contacted ? 'Contacted' : 'Not Contacted'}</p>
            <p><Link to={`/notes/${id}`}>View Notes</Link></p>
        </>
    )
}

export default PlayerCard