import { useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"

function Notes() {
    const {id} = useParams()
    const {players} = useOutletContext()

    const data = players.find(player => player.id === parseInt(id))
    const [player, setPlayer] = useState(data)
    
    console.log(player)

    return (
        <>
            <h1>Notes Page</h1>
            <p>{player.notes}</p>
        </>
    )
}

export default Notes