import credentials from './credentials.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '';
    }
  }

  getName(name) {
    axios.get((response) => {
      this.setState({
        name: name.data
      })
    })
    .catch((err) =>
    console.log(err));
  }

  addName(name) {
    axios.post('/home', {
      name: name.name,
    })
    .then(() =>
    this.addName())
    .catch((err) =>
    console.log(err));
  }

  render() {
    return (
      <div className="body">
      <div className="heading">CheckOut</div>
        <form>
          <Credentials inputName={this.}/>
        </form>
      </div>
    )
  }
}

export default App;