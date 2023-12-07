import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
  const renderContactList=props.contacts.map((contact)=>{
    return(
      <ContactCard contact={contact}/>
    )
  })
  return (
    <div className='contactListBox'>
      {renderContactList}
    </div>
  )
}

export default ContactList
