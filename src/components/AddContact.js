import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddContact = ({ AddContactHandler }) => {
  const navigate = useNavigate();

  const [contact, setContact] = useState({ name: "", email: "" });

  const add = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    AddContactHandler(contact);
    setContact({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className='contactInputBox text-center'>
      <h2>Add Contact</h2>
      <form className='row' onSubmit={add}>
        <div className="inputField col-md-12">
          <input
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            type="text"
            name='name'
            placeholder='Enter name'
            required
            autoComplete="off"
          />
        </div>
        <div className="inputField col-md-12">
          <input
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            type="email"
            name='email'
            placeholder='Enter email'
            required
            autoComplete="off"
          />
        </div>
        <div className="inputField col-md-12">
          <button className='addButton'>Add</button>
        </div>
      </form>
      <Link to='/'>
        <button className="view-contact-list">View Contact</button>
      </Link>
    </div>
  );
};

export default AddContact;
