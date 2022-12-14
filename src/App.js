import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`)
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Text Area:
            <textarea name="textarea" value={this.state.value} onChange={this.handleChange} placeholder="Enter a value" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default App
