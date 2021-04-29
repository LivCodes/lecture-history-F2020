import Episode from './Episode'

function EpisodeList({episodes}){  
  return (
    <div>
      {episodes.map(episode => <Episode key={episode.title} data={episode}/>)}
    </div>
  )
}

export default EpisodeList
