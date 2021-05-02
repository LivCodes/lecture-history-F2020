import Episode from './Episode'

function EpisodeList(props){  
  return (
    <div>
      {props.episodes.map(episode => <Episode key={episode.title} data={episode}/>)}
    </div>
  )
}

export default EpisodeList
