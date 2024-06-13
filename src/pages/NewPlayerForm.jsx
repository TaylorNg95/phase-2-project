function NewPlayerForm() {
    return (
        <>
            <h1>New Player Form Page</h1>
            <form>
                <label>First Name: <input type='text'/></label><br />
                <label>Last Name: <input type='text'/></label><br />
                <label>Class Year: 
                    <select>
                        <option value='2025'>2025</option>
                        <option value='2025'>2026</option>
                        <option value='2025'>2027</option>
                        <option value='2025'>2028</option>
                        <option value='2025'>2029</option>
                        <option value='2025'>2030</option>
                    </select>
                </label><br />
                <label>Location: <input type='text'/></label><br />
                <label>Dominant Hand:
                    <select>
                        <option value='left'>Left</option>
                        <option value='right'>Right</option>
                    </select>
                </label><br />
                <label>Contacted?
                    <select>
                        <option value='false'>No</option>
                        <option value='true'>Yes</option>
                    </select>
                </label><br />
                <label>Notes:<br /><textarea rows='10' cols='50'></textarea></label>
            </form>
        </>
    )
}

export default NewPlayerForm