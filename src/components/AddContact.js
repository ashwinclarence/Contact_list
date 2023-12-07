import React from "react";

class AddContact extends React.Component{
  state={
    name:"",
    email:"",
  };
  add=(e)=>{
    e.preventDefault();
    if(this.state.name==="" || this.state.email===""){
      alert("all the fields are mandatory")
      return
    }
    this.props.AddContactHandler(this.state);
    this.setState({name:"",email:""})
  };
  render(){
    return(
      <div className='contactInputBox text-center'>
      <h2>Add Contact</h2>
      <form action="" className='row' onSubmit={this.add}>
        <div className="inputField col-md-12">
           
            <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} type="text" name='name' placeholder='Enter name' required autoComplete="off"/>
        </div>
        <div className="inputField col-md-12">
            
            <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} type="email" name='name' placeholder='Enter email' required autoComplete="off"/>
        </div>
        <div className="inputField col-md-12">
            
        <button className='addButton '>Add</button>
        </div>
        
      </form>
    </div>
    )
  }
}
export default AddContact;