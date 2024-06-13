import { Link } from "react-router-dom"

function PlayerCard({player, deletePlayer}) {
    const {id, fname, lname, classYear, location, dominantHand, contacted} = player

    function handleDelete(){
        const userConfirmed = confirm(`Are you sure you want to delete ${player.fname} ${player.lname}'s profile?`)
        if(userConfirmed){
            fetch(`http://localhost:3000/players/` + id, {method: 'DELETE'})
            .then(response => deletePlayer(id))
        }
    }
    
    return (
        <>
            <h2>{fname} {lname}</h2>
            <p>Class of {classYear}</p>
            <p>{dominantHand}</p>
            <p>{location}</p>
            <p>{contacted ? 'Contacted' : 'Not Contacted'}</p>
            <p><Link to={`/notes/${id}`}>View Notes</Link></p>
            <button onClick={handleDelete}>Delete Player</button>
        </>
    )
}

export default PlayerCard