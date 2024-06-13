import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import FilterBar from "../components/FilterBar"
import PlayerCard from "../components/PlayerCard"

function PlayerList() {
    const {players} = useOutletContext()
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
        <>
            <h1>Player List Page</h1>
            <FilterBar filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>
            {displayedPlayers.map(player => <PlayerCard key={player.id} player={player}/>)}
        </>
    )
}

export default PlayerList