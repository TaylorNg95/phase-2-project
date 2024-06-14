import { Box } from "@mui/material"
import { useOutletContext, useParams } from "react-router-dom"

function Notes() {
    const {id} = useParams()
    const {players} = useOutletContext()
    const player = players.find(player => player.id == id)

    return (
        <Box sx={{textAlign: 'center', margin: '3%'}}>
            <h1>Notes: {player.fname} {player.lname}</h1>
            <p>{player.notes ? player.notes : `No existing notes for ${player.fname} ${player.fname}`}</p>
        </Box>
    )
}

export default Notes