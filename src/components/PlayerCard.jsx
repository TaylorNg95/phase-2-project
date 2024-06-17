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
        <div>
            <h2>{player.fname} {player.lname}</h2>
            <h3>Class of {player.classYear}</h3>
            <p>{player.location}</p>
            <p>{player.dominantHand}</p>
            <p>{contacted ? 'Contacted' : 'Not Contacted'}</p>
            <p><Link to={`/notes/${id}`}>View Notes</Link></p>
            <p><Link to={`/edit/${id}`}>Edit</Link></p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default PlayerCard