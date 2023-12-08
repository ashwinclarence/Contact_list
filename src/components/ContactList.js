import React from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom'

function ContactList(props) {
  const deleteContactHandler=(id)=>{
    props.getContactId(id);
  }
  const renderContactList=props.contacts.map((contact)=>{
    return(
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
    )
  })
  return (
    <div className='contactListBox'>
      <h2>Contact List</h2>
      <Link to={'/add'}>
      <button className='add-contact'>Add Contact</button>
      </Link>
      {renderContactList}
    </div>
  )
}

export default ContactList
