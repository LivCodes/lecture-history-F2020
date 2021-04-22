function SearchBar(props){
  const {searchValue, changeSearchValue} = props
  return (
    <div>
      <p>Searchbar</p>
      <input 
        type="text" 
        name="search-bar"
        placeholder="Search" 
        value={searchValue} 
        onChange={changeSearchValue}
      />
    </div>
  )
}

export default SearchBar