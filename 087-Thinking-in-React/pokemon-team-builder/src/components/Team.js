import Card from './Card'

function Team(props){
  console.log(props)
  //map through our pokemon => render a <Card pokemonData={} />
  return (
    <>
      <h3>Team:</h3>
      <div>
      </div>
      <button>Reset Team</button>
    </>
  )
}

export default Team