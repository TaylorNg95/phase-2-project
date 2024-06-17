import { Link } from "react-router-dom"

// MUI
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from "@mui/material/Box";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

// -------

function PlayerCard({player, deletePlayer}) {
    console.log('in player card')
    const {id, fname, lname, classYear, location, dominantHand, contacted} = player
    console.log(contacted)

    function handleDelete(){
        const userConfirmed = confirm(`Are you sure you want to delete ${player.fname} ${player.lname}'s profile?`)
        if(userConfirmed){
            fetch(`http://localhost:3000/players/` + id, {method: 'DELETE'})
                .then(response => deletePlayer(id))
        }
    }

    const card = (
        <>
            <CardContent>
                <Box>
                    <Typography variant='h6' color="text.primary" sx={{display: 'inline'}}>{fname} {lname}</Typography>
                    <Button size="small" onClick={handleDelete} sx={{float: 'right'}}><DeleteOutlineIcon /></Button>
                </Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">Class of {classYear}</Typography>
                <Typography variant="body2">{location}</Typography>
                <Typography sx={{ mb: 1.5 }} variant="body2">{dominantHand}</Typography>
                <Box>
                    {contacted ? <CheckCircleOutlineOutlinedIcon sx={{color: 'green'}}/> : <CancelOutlinedIcon sx={{color: 'red'}} />}
                    <Typography variant="body2" sx={{display: 'inline'}}>{contacted ? ' Contacted' : ' Not Contacted'}</Typography>
                </Box>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-between'}}>
                <Button size="small" variant='outlined' component={Link} to={`/notes/${id}`}>View Notes</Button>
                <Button size="small" component={Link} to={`/edit/${id}`}>Edit</Button>
            </CardActions>
        </>
    )
    
    return (
        <Grid item xs={6} sm={4} md={3}>
            <Card variant='outlined' sx={{border: 'solid 1px'}}>
                {card}
            </Card>
            {/* <h2>{fname} {lname}</h2>
            <h3>Class of {classYear}</h3>
            <p>{location}</p>
            <p>{dominantHand}</p>
            <p>{contacted ? 'Contacted' : 'Not Contacted'}</p>
            <p><Link to={`/notes/${id}`}>View Notes</Link></p>
            <p><Link to={`/edit/${id}`}>Edit</Link></p>
            <button onClick={handleDelete}>Delete</button> */}
        </Grid>
    )
}

export default PlayerCard