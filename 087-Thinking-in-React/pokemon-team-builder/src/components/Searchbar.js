function Searchbar(props){
  console.log("Searchbars's props:", props)

  function handleChange(e){
    props.setSearchTerm(e.target.value)
  }

  return <input className="search" placeholder="Search..." value={props.searchTerm} onChange={handleChange}/>
}

export default Searchbar