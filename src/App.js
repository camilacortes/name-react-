import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){


  }


  render(){
    return (
      <div className="form-container">
        <forn className="form">
          <input name="firstName"  value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} className="first-name"/>
          <input name="lastName"  value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} className="last-name"/>

        </forn>
       </div>
     );
  }
}

export default App;
