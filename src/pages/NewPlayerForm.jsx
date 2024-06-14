import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

function NewPlayerForm() {
    console.log('in new player form')
    const {addPlayer} = useOutletContext()
    const navigate = useNavigate()

    const initialFormData = {
        fname: '',
        lname: '',
        classYear: 2025,
        location: '',
        dominantHand: 'right',
        contacted: false,
        notes: ''
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
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

    /* function handleNoteChange(e){
        e.preventDefault()
        console.log('button is functioning properly')
    } */

    return (
        <>
            <h1>New Player Form Page</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name: <input type='text' name='fname' value={formData.fname} onChange={handleChange} required/></label><br />
                <label>Last Name: <input type='text' name='lname' value={formData.lname} onChange={handleChange} required/></label><br />
                <label>Class Year: 
                    <select name='classYear' value={formData.classYear} onChange={handleChange}>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                        <option value='2027'>2027</option>
                        <option value='2028'>2028</option>
                        <option value='2029'>2029</option>
                        <option value='2030'>2030</option>
                    </select>
                </label><br />
                <label>Location: <input type='text'name='location' value={formData.location} onChange={handleChange} required/></label><br />
                <label>Dominant Hand:
                    <select name='dominantHand' value={formData.dominantHand} onChange={handleChange}>
                        <option value='right'>Right</option>
                        <option value='left'>Left</option>
                    </select>
                </label><br />
                <label>Contacted?
                    <select name='contacted' value={formData.contacted} onChange={handleChange}>
                        <option value='false'>No</option>
                        <option value='true'>Yes</option>
                    </select>
                </label><br />
                <label>Notes:<br /><textarea rows='5' cols='50' placeholder='Add notes here' name='notes' value={formData.notes} onChange={handleChange}></textarea></label><br />
                {/* <button onClick={handleNoteChange}>+ Note</button><button onClick={handleNoteChange}>- Note</button><br /><br /> */}
                <input type='submit' value='Add New Player'/>
            </form>
        </>
    )
}

export default NewPlayerForm