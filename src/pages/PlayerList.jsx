import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import FilterBar from "../components/FilterBar"
import PlayerCard from "../components/PlayerCard"
import './PlayerList.css'

import { Grid, Container } from "@mui/material"

function PlayerList() {
    console.log('in player list')
    const {players, loading, deletePlayer} = useOutletContext()
    const [filter, setFilter] = useState('All')
    const [search, setSearch] = useState('')
    
    console.log(players)
    const displayedPlayers = players.sort((a, b) => a.fname.toLowerCase().localeCompare(b.fname.toLowerCase()))
        .filter(player => {
            if(filter === 'All'){
                return player
            } else return player.classYear == filter
        })
        .filter(player => (player.fname + ' ' + player.lname).toLowerCase().includes(search.toLowerCase()))

    if(loading){
        return <h1>Loading...</h1>
    } else return (
        <>
            <h1>Player Database</h1>
            <Container sx={{marginBottom: '2%', textAlign: 'center', fontSize: '1.25em'}}>
                <FilterBar filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>
            </Container>
            <Container sx={{marginBottom: '2%'}}> 
                <Grid container spacing={2}>    
                    {displayedPlayers.map(player => <PlayerCard key={player.id} player={player} deletePlayer={deletePlayer}/>)}
                </Grid>
            </Container>
        </>
    )
}

export default PlayerList