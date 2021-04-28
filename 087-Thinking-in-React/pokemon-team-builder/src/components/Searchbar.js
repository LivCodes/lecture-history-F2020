function Searchbar(props){
  const {searchTerm, setSearchTerm} = props

  function handleChange(e){
    setSearchTerm(e.target.value)
  }

  return <input className="search" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
}

export default Searchbar