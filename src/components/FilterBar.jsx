function FilterBar({filter, setFilter, search, setSearch}) {
    return (
        <>
            <label>Filter Class:
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value='All'>All</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                </select>
            </label>
            <label>Search by Name:
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
            </label>
        </>
    )
}

export default FilterBar