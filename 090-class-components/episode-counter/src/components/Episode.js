import {Component} from 'react'

class Episode extends Component {
  constructor(){
    super()
    this.state = {isFavorited: false, color: "red"}
  }

  componentDidUpdate(){
    console.log("This function is invoked for every update")
  }

  //state changing callback method
  toggleFavorite = () => {
    this.setState( prevState => ({isFavorited: !prevState.isFavorited}) ) 
  }

  toggleColor = () => {
    if(this.state.color === "red"){
      this.setState({color: "blue"})
    } else {
      this.setState({color: "red"})
    }
  }

  render(){
    // console.log(this)
    const {id, title} = this.props.data
    return (
      <div className="border">
        <span onClick={this.toggleFavorite}>{ this.state.isFavorited ? "❤️" : "♡" }</span>
        <span onClick={this.toggleColor} style={{color: this.state.color}}>Episode {id}: {title}</span>
      </div>
    )
  }
}

// {isFavorited: false, color: "red"} {isFavorited: true}

export default Episode