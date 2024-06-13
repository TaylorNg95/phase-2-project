import { useOutletContext } from "react-router-dom"
import FilterBar from "../components/FilterBar"
import PlayerCard from "../components/PlayerCard"

function PlayerList() {
    const {players} = useOutletContext()

    return (
        <>
            <h1>Player List Page</h1>
            <FilterBar />
            {players.map(player => <PlayerCard key={player.id} player={player}/>)}
        </>
    )
}

export default PlayerList