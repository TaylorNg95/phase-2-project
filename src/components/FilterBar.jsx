function FilterBar({filter, setFilter}) {
    return (
        <>
            <label>Filter Class:
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                </select>
            </label>
        </>
    )
}

export default FilterBar