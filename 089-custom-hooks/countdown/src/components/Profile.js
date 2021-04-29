import logo from '../logo.svg';

function Profile(props){

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome {props.username}</h2>
      <h3>{props.bio}</h3>
    </header>
  )
}

export default Profile