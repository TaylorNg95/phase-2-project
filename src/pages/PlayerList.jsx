import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import FilterBar from "../components/FilterBar"
import PlayerCard from "../components/PlayerCard"

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
            <h1>Player List Page</h1>
            <FilterBar filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>
            {players.map(player => <PlayerCard key={player.id} player={player} deletePlayer={deletePlayer}/>)}
        </>
    )
}

export default PlayerList