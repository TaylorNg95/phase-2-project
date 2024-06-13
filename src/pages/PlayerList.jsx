import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import FilterBar from "../components/FilterBar"
import PlayerCard from "../components/PlayerCard"

function PlayerList() {
    const {players} = useOutletContext()
    const [filter, setFilter] = useState('2025')
    console.log(players[1].classYear)

    const displayedPlayers = players.sort((a, b) => a.fname.toLowerCase().localeCompare(b.fname.toLowerCase()))
        .filter(player => player.classYear == filter)

    return (
        <>
            <h1>Player List Page</h1>
            <FilterBar filter={filter} setFilter={setFilter}/>
            {displayedPlayers.map(player => <PlayerCard key={player.id} player={player}/>)}
        </>
    )
}

export default PlayerList