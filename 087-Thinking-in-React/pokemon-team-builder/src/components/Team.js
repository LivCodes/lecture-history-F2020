import Card from './Card'

function Team(props){
  const {team, removePokemonFromTeam} = props
  return (
    <>
      <h3>Team:</h3>
      <div>
        {team.map(p => <Card key={p.id} pokemon={p} clickHandler={removePokemonFromTeam}/>)}
      </div>
      <button>Reset Team</button>
    </>
  )
}

export default Team