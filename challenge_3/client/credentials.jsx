class Credentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };


  }

  handleChange(e) {
    this.setState({
      name: e.target.value;
    });
  }

  handleSubmit(e) {
    alert('Credentials submited: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default credentials;