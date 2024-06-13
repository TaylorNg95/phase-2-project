import { useState } from "react"

function NewPlayerForm() {
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

    return (
        <>
            <h1>New Player Form Page</h1>
            <form>
                <label>First Name: <input type='text' name='fname' value={formData.fname} onChange={handleChange}/></label><br />
                <label>Last Name: <input type='text' name='lname' value={formData.lname} onChange={handleChange}/></label><br />
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
                <label>Location: <input type='text'name='location' value={formData.location} onChange={handleChange}/></label><br />
                <label>Dominant Hand:
                    <select name='dominantHand' value={formData.dominantHand} onChange={handleChange}>
                        <option value='left'>Left</option>
                        <option value='right'>Right</option>
                    </select>
                </label><br />
                <label>Contacted?
                    <select name='contacted' value={formData.contacted} onChange={handleChange}>
                        <option value='false'>No</option>
                        <option value='true'>Yes</option>
                    </select>
                </label><br />
                <label>Notes:<br /><textarea rows='10' cols='50' placeholder='Add notes here' name='notes' value={formData.notes} onChange={handleChange}></textarea></label>
            </form>
        </>
    )
}

export default NewPlayerForm