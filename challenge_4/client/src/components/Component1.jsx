import React from 'react';
import GridLayout from './Component2.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body">
        <GridLayout />
      </div>
    )
  }
}

export default App;