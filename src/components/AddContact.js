import React from 'react'

function AddContact() {
  return (
    <div className='contactInputBox text-center'>
      <h2>Add Contact</h2>
      <form action="" className='row'>
        <div className="inputField col-md-12">
           
            <input type="text" name='name' placeholder='Enter name' required/>
        </div>
        <div className="inputField col-md-12">
            
            <input type="email" name='name' placeholder='Enter email' required/>
        </div>
        <div className="inputField col-md-12">
            
        <button className='addButton '>Add</button>
        </div>
        
      </form>
    </div>
  )
}

export default AddContact
