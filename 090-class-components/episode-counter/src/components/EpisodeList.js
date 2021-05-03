import React from 'react'
import Episode from './Episode'

class EpisodeList extends React.Component {

  render(){
    //as much logic as we want
    return (
      <div>
        {this.props.episodes.map(episode => <Episode key={episode.title} data={episode}/>)}
      </div>
    )
  }

}

//Create a class and make it extends React.Component
//Create a render instance method 
//That method needs to return your JSX
//convert `props` to `this.props`

export default EpisodeList
