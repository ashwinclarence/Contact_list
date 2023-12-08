import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    if (retrieveContact) {
      setContacts(retrieveContact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <div className='container-fluid mainbox'>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
          />
          <Route path='/Add' element={<AddContact AddContactHandler={AddContactHandler} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
