import './FilterBar.css'

// -------

function FilterBar({filter, setFilter, search, setSearch}) {
    return (
        <>
            <label>Filter Class:&nbsp;
                <select value={filter} onChange={(e) => setFilter(e.target.value)} id='filter'>
                    <option value='All'>All</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                    <option value='2028'>2028</option>
                    <option value='2029'>2029</option>
                    <option value='2030'>2030</option>
                </select>
            </label>&nbsp;&nbsp;
            <label>Search by Name:&nbsp;
                <input id='search' type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
            </label>
        </>
    )
}

export default FilterBar