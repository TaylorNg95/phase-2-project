import { useOutletContext, useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

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
        <>
            <h1>Edit Player: {player.fname} {player.lname}</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name: <input type='text' name='fname' value={editFormData.fname} onChange={handleChange}/></label><br />
                <label>Last Name: <input type='text' name='lname' value={editFormData.lname} onChange={handleChange}/></label><br />
                <label>Class Year: 
                    <select name='classYear' value={editFormData.classYear} onChange={handleChange}>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                        <option value='2027'>2027</option>
                        <option value='2028'>2028</option>
                        <option value='2029'>2029</option>
                        <option value='2030'>2030</option>
                    </select>
                </label><br />
                <label>Location: <input type='text'name='location' value={editFormData.location} onChange={handleChange}/></label><br />
                <label>Dominant Hand:
                    <select name='dominantHand' value={editFormData.dominantHand} onChange={handleChange}>
                        <option value='right'>Right</option>
                        <option value='left'>Left</option>
                    </select>
                </label><br />
                <label>Contacted?
                    <select name='contacted' value={editFormData.contacted} onChange={handleChange}>
                        <option value='false'>No</option>
                        <option value='true'>Yes</option>
                    </select>
                </label><br />
                <label>Notes:<br /><textarea rows='10' cols='50' placeholder='Add notes here' name='notes' value={editFormData.notes} onChange={handleChange}></textarea></label><br />
                <input type='submit' value='Update Player'/>
            </form>
        </>
    )
}

export default EditForm