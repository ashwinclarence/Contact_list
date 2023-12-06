import React from 'react'

function ContactList(props) {
  const renderContactList=props.contacts.map((contact)=>{
    return(
      <div className="item">
        <div className="content">
          <div className="nameHeader">{contact.name}</div>
          <div className="nameHeader">{contact.email}</div>
        </div>
      </div>
    )
  })
  return (
    <div className='contactListBox'>
      
    </div>
  )
}

export default ContactList
