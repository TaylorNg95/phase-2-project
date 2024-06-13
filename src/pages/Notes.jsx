import { useOutletContext, useParams } from "react-router-dom"

function Notes() {
    const {id} = useParams()
    const {players} = useOutletContext()
    const player = players.find(player => player.id == id)

    return (
        <>
            <h1>Notes Page</h1>
            <h2>{player.fname} {player.lname}</h2>
        </>
    )
}

export default Notes