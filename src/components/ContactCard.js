import React from 'react'
import profile from '../images/profile.png'
function ContactCard(props) {
  const{id,name,email}=props.contact;
  return (
    <div className="item ">
        <div className="content row">
          <div className="nameHeader col-md-2"><img src={profile} alt="profile" /></div>
          <div className="nameHeader col-md-4">{name}</div>
          <div className="nameHeader col-md-5">{email}</div>
          <div className="nameHeader col-md-1"><i class="fa-solid fa-trash-can"></i></div>
          
        </div>
      </div>
  )
}

export default ContactCard
