import { useOutletContext, useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

// MUI
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography'
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material"

// -------

function EditForm() {
    const {players, editPlayer} = useOutletContext()
    const {id} = useParams()
    const navigate = useNavigate()
    
    const player = players.find(player => player.id === id)
    const [editFormData, setEditFormData] = useState(player)

    function handleChange(e){
        let targetValue;
        if(e.target.name === 'contacted'){
            targetValue = e.target.value === 'true' ? true : false 
        } else targetValue = e.target.value
        setEditFormData({...editFormData, [e.target.name]: targetValue})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3000/players/` + id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify(editFormData)
        })
            .then(response => response.json())
            .then(updatedPlayer => {
                editPlayer(updatedPlayer)
                navigate('/players')
            })
    }
    
    return (
        <Grid container spacing={2} sx={{padding: '2%'}}>
            <Grid item xs={12} sx={{textAlign: 'center', margin: '2%'}}>
                <Typography variant='h4' component='h1' sx={{textAlign: 'center'}}>Edit Player: {player.fname} {player.lname}</Typography>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'center', fontSize: '1.25em'}}>
                <Box component='form' onSubmit={handleSubmit}>
                    <TextField sx={{alignItems: 'left', marginBottom: '1%'}} variant='standard' name='fname' label="First Name" value={editFormData.fname} onChange={handleChange} required />&nbsp;
                    <TextField variant='standard' name='lname' label="Last Name" value={editFormData.lname} onChange={handleChange} required /><br />
                    <FormControl variant='standard' sx={{width: '200px', marginBottom: '1%'}} required>
                        <InputLabel>Class Year</InputLabel>
                        <Select name='classYear' value={editFormData.classYear} onChange={handleChange}>
                            <MenuItem value='2025'>2025</MenuItem>
                            <MenuItem value='2026'>2026</MenuItem>
                            <MenuItem value='2027'>2027</MenuItem>
                            <MenuItem value='2028'>2028</MenuItem>
                            <MenuItem value='2029'>2029</MenuItem>
                            <MenuItem value='2030'>2030</MenuItem>
                        </Select>
                    </FormControl>&nbsp;
                    <TextField variant='standard' name='location' label="Location" value={editFormData.location} onChange={handleChange} required /><br />
                    <FormControl variant='standard' sx={{width: '200px', marginBottom: '1%'}} required>
                        <InputLabel>Dominant Hand</InputLabel>
                        <Select name='dominantHand' value={editFormData.dominantHand} onChange={handleChange}>
                            <MenuItem value='Right-Handed'>Right</MenuItem>
                            <MenuItem value='Left-Handed'>Left</MenuItem>
                        </Select>
                    </FormControl>&nbsp;
                    <FormControl variant='standard' sx={{width: '200px'}} required>
                        <InputLabel>Contacted?</InputLabel>
                        <Select name='contacted' value={editFormData.contacted} onChange={handleChange}>
                            <MenuItem value='false'>No</MenuItem>
                            <MenuItem value='true'>Yes</MenuItem>
                        </Select>
                    </FormControl><br />
                    <TextField sx={{width: '405px'}} variant='standard' name='notes' label="Notes" value={editFormData.notes} onChange={handleChange} multiline placeholder='Add notes here'/><br />
                    <Button sx={{marginTop: '2%'}} type='submit' variant='outlined'>Update</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default EditForm