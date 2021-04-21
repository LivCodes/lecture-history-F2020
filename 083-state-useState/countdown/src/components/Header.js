import logo from '../logo.svg';

//if count >= 10 => Long way to go
//if count < 10 => Almost done
//if count === 0 => DON!

function Header(props){
  const {countVal} = props

  function getMessage(){
    if(countVal >= 10){
      return `${countVal} episodes left??? Long way to go...`
    } else if(countVal > 0){
      return `Almost done! ${countVal} episodes left!`
    } else {
      return "DONE!"
    }
  }

  return (
    <header className="App-header" style={{color: props.color}}>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to the Episode Countdown</h2>
      <h3>{getMessage()}</h3>
    </header>
  )
}

export default Header