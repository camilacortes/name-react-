import React from 'react';
import List from './List';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    // this.submitForm = this.submitForm.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value 
    })
    console.log(this.state.firstName)
    console.log(this.state.lastName)

  }

  // submitForm(event){
  //   const firstNameCopy = this.state.firstName
  //   const lastNameCopy = this.state.lastName
  //   this.state.list.push(firstNameCopy)
  //   this.state.list.push(lastNameCopy);
  //   console.log(this.state.list)

  //   this.setState({
  //       firstName: ''
  //   })
    

    
  // }

  submitForm = event => {
    event.preventDefault()
    this.setState((prevState) =>{
      return {
        firstName: '',
        lastName: '',
        list: [...prevState.list, 
        {
          firstName: prevState.firstName,
          lastName: prevState.lastName
        }]
      }
    })
  }

  

  render(){

    const arr = this.state.list.map((item, index) =>{
      return <List key={index} firstName={item.firstName} lastName={item.lastName} className="list"/>
    })

    return (
      <>
      <div className="form-container">
        <form className="form" onSubmit={this.submitForm}>
          <input 
          name="firstName"  
          value={this.state.firstName} 
          placeholder="First Name" 
          onChange={this.handleChange} 
          className="first-name"/>
          <input 
          name="lastName"  
          value={this.state.lastName} 
          placeholder="Last Name" 
          onChange={this.handleChange} 
          className="last-name"/>
          <button className="button">Submit</button>
        </form>
      </div>
       <div className="name-container">
       <h1 className="first-name">Adding Name: {this.state.firstName} </h1>
       <h1 className="second-name">{this.state.lastName} </h1>
       </div>
       <div className="list-container">
       <h1>List: {arr}</h1>
       </div>
       
       </>
     );
  }
}

export default App;
