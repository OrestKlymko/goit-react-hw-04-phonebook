import { Component, useEffect } from 'react';
import React, {useState} from 'react';
import { Filter } from './filter/Filter';
import { Form } from './contacts/contacts';
import { ContactList } from './contactList/ContactList';

export function App() {
  const [filter,setFilter] = useState('')
  const [contacts,setContacts] = useState(JSON.parse(localStorage.getItem('contact'))??[
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])

  useEffect(()=>{
   localStorage.setItem('contact',JSON.stringify(contacts))
  },[contacts])
 const onInput = data => {
    setFilter(data.toLowerCase());
  };

 const formSubmit = data => {
    if (
      Boolean(contacts.find(contact => contact.name === data.name))
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(contacts.concat(data));
    }
  };

const onDeleteContact = deleteItem => {
    setContacts( contacts.filter(contact => contact.id !== deleteItem));
  };

    return (
      <div>
        <h1>Phonebook</h1>
        <Form formSubmit={formSubmit}  />
        <h2>Contacts</h2>
        <Filter onChange={onInput} />
        <ContactList
          onClick={onDeleteContact}
          contacts={contacts}
          filter={filter}
        />
      </div>
    );

}
