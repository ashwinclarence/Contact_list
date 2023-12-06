import React from 'react'
import './App.css'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
function App() {

  const contacts=[
    {
      id:"1",
      name:"ashwin",
      email:"ashwin@gmail.com"
    },
    {
      id:"2",
      name:"anadhu",
      email:"anadhu@gmail.com"
    },
    {
      id:"3",
      name:"siva",
      email:"siva@gmail.com"
    }
  ]
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default App
