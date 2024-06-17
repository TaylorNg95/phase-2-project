import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

// MUI
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography'
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material"

function NewPlayerForm() {
    console.log('in new player form')
    const {addPlayer} = useOutletContext()
    const navigate = useNavigate()

    const initialFormData = {
        fname: '',
        lname: '',
        classYear: '',
        location: '',
        dominantHand: '',
        contacted: '',
        notes: ''
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleChange(e){
        let targetValue;
        if(e.target.name === 'contacted'){
            targetValue = e.target.value === 'true' ? true : false 
        } else targetValue = e.target.value
        setFormData({...formData, [e.target.name]: targetValue})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/players', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(newPlayer => {
                console.log('form has been submitted: ', newPlayer)
                addPlayer(newPlayer)
                setFormData(initialFormData)
                navigate('/players')
            })
    }

    return (
        <Grid container spacing={2} sx={{padding: '2%'}}>
            <Grid item xs={12} sx={{textAlign: 'center', margin: '2%'}}>
                <Typography variant='h4' component='h1' sx={{textAlign: 'center'}}>Add New Player</Typography>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'center', fontSize: '1.25em'}}>
                <Box component='form' onSubmit={handleSubmit}>
                    <TextField sx={{alignItems: 'left'}} variant='standard' name='fname' label="First Name" value={formData.fname} onChange={handleChange} required />&nbsp;
                    <TextField variant='standard' name='lname' label="Last Name" value={formData.lname} onChange={handleChange} required /><br />
                    <FormControl variant='standard' sx={{width: '200px'}} required>
                        <InputLabel>Class Year</InputLabel>
                        <Select name='classYear' value={formData.classYear} onChange={handleChange}>
                            <MenuItem value='2025'>2025</MenuItem>
                            <MenuItem value='2026'>2026</MenuItem>
                            <MenuItem value='2027'>2027</MenuItem>
                            <MenuItem value='2028'>2028</MenuItem>
                            <MenuItem value='2029'>2029</MenuItem>
                            <MenuItem value='2030'>2030</MenuItem>
                        </Select>
                    </FormControl>&nbsp;
                    <TextField variant='standard' name='location' label="Location" value={formData.location} onChange={handleChange} required /><br />
                    <FormControl variant='standard' sx={{width: '200px'}} required>
                        <InputLabel>Dominant Hand</InputLabel>
                        <Select name='dominantHand' value={formData.dominantHand} onChange={handleChange}>
                            <MenuItem value='Right-Handed'>Right</MenuItem>
                            <MenuItem value='Left-Handed'>Left</MenuItem>
                        </Select>
                    </FormControl>&nbsp;
                    <FormControl variant='standard' sx={{width: '200px'}} required>
                        <InputLabel>Contacted?</InputLabel>
                        <Select name='contacted' value={formData.contacted} onChange={handleChange}>
                            <MenuItem value='false'>No</MenuItem>
                            <MenuItem value='true'>Yes</MenuItem>
                        </Select>
                    </FormControl><br />
                    <TextField sx={{width: '405px'}} variant='standard' name='notes' label="Notes" value={formData.notes} onChange={handleChange} multiline placeholder='Add notes here'/><br />
                    <Button sx={{marginTop: '2%'}} type='submit' variant='outlined'>Add New Player</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default NewPlayerForm