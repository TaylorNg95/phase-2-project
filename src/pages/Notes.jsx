import { Link, useOutletContext, useParams } from "react-router-dom"

// MUI
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography'
import { Button } from "@mui/material"

// -------

function Notes() {
    console.log('in notes')
    const {id} = useParams()
    const {players} = useOutletContext()
    const player = players.find(player => player.id === id)

    return (
        <Grid container spacing={2} sx={{padding: '4%'}}>
            <Grid item xs={12} sx={{textAlign: 'center', margin: '2%'}}>
                <Typography variant='h4' component='h1' sx={{textAlign: 'center'}}>Notes: {player.fname} {player.lname}</Typography>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'center', fontSize: '1.25em'}}>
                <Typography variant='body1' component='p' sx={{textAlign: 'center'}}>{player.notes ? player.notes : `No existing notes for ${player.fname} ${player.lname}`}</Typography>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'right', fontSize: '1.25em'}}>
                <Button component={Link} to={`/edit/${id}`} variant='outlined' sx={{marginRight: '5%', marginTop: '3%'}}>Edit</Button>    
            </Grid>
        </Grid>
    )
}

export default Notes