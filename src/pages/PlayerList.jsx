import { useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import FilterBar from "../components/FilterBar"
import PlayerCard from "../components/PlayerCard"

// MUI
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material"

// -------

function PlayerList() {
    console.log('in player list')
    const {players, deletePlayer} = useOutletContext()
    const [filter, setFilter] = useState('All')
    const [search, setSearch] = useState('')
    
    const displayedPlayers = players.sort((a, b) => a.fname.toLowerCase().localeCompare(b.fname.toLowerCase()))
        .filter(player => {
            if(filter === 'All'){
                return player
            } else return player.classYear == filter
        })
        .filter(player => (player.fname + ' ' + player.lname).toLowerCase().includes(search.toLowerCase()))
    
    return (
        <Grid container spacing={2} sx={{padding: '2%'}}>
            <Grid item xs={12} sx={{textAlign: 'center', margin: '2%'}}>
                <Typography variant='h4' component='h1' sx={{textAlign: 'center'}}>Player Database</Typography>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'center', fontSize: '1.25em', marginBottom: '1%'}}>
                <FilterBar filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>
            </Grid>
            {displayedPlayers.map(player => <PlayerCard key={player.id} player={player} deletePlayer={deletePlayer}/>)}
            <Grid item xs={12} sx={{textAlign: 'center', fontSize: '1.25em'}}>
                <Button sx={{marginTop: '1%'}} variant='contained' component={Link} to='/new'>Add New Player</Button>
            </Grid>
        </Grid>
    )
}

export default PlayerList