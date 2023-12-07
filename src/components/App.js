import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([])
  const AddContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id:Date.now(),...contact}])
  }
  useEffect(() => {
    const retrirveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)))
    if (retrirveContact) {
      setContacts(retrirveContact);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

const removeContactHandler=(id)=>{
  const newContactList=contacts.filter((contact)=>{
    return contact.id!==id;
  })
  setContacts(newContactList);
}

  return (
    <div className='container-fluid mainbox'>
      <Header />
      <AddContact AddContactHandler={AddContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  )
}

export default App
