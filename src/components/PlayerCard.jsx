import { Link } from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
            <Grid item xs={6} sm={4} md={3}>
                <Card sx={{backgroundColor: '#dddddd'}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {player.fname} {player.lname}
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            Class of {player.classYear}
                        </Typography>
                        <Typography variant='body2' color="text.secondary" gutterBottom>
                            {player.location}
                        </Typography>
                        <Typography variant='body2' color="text.secondary" gutterBottom>
                            {player.dominantHand}
                        </Typography>
                        <Typography variant='body2' color="text.secondary" gutterBottom>
                            {contacted ? <><CheckCircleOutlineOutlinedIcon fontSize='small' sx={{color: 'green'}}/> Contacted</> : <><HighlightOffOutlinedIcon fontSize='small' sx={{color: 'red'}}/> Not Contacted</>}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" component={Link} to={`/notes/${id}`}>View Notes</Button>
                        <Button size="small" component={Link} to={`/edit/${id}`}>Edit</Button>
                        <Button size="small" onClick={handleDelete}><DeleteOutlineIcon /></Button>
                        {/* Maybe put edit and delete buttons in top corner to de-emphasize*/}
                    </CardActions>
                </Card>
            </Grid>
            {/*
            <p><Link to={`/notes/${id}`}>View Notes</Link></p>
            <p><Link to={`/edit/${id}`}>Edit Player</Link></p>
            <button onClick={handleDelete}>Delete Player</button> */}
        </>
    )
}

export default PlayerCard