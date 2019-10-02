import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      body: {}
    }

    this.handlePOSTSubmit = this.handlePOSTSubmit.bind(this);

  }

  getPage() {
    axios.get('/')
      .then((response) => {
        this.setState({
          body: response.data
        })
      })
      .catch((error) => {
        console.log('ERROR', error);
      })
  }

  handlePOSTSubmit(e) {
    e.preventDefault();
    axios.post('/', {
      body: this.state.body
    })
      .then((response) => {
        console.log('POSTED');
      })
      .then( =>  {
        this.getPage();
      })
      .catch((error) => {
        console.log('ERROR', error);
      });

    this.setState({
      body: e.target.value, () => console.log(this.state.body);
    })
  }



  render() {
    return (
      <div>
         <form>
              <input type="text" name="json" id="jsonID"/>
              <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default App;