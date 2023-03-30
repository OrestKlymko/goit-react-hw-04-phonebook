import { Component } from 'react';
import React from 'react';
import { Filter } from './filter/Filter';
import { Form } from './contacts/contacts';
import { ContactList } from './contactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onInput = data => {
    this.setState({
      filter: data.toLowerCase(),
    });
  };

  formSubmit = data => {
    if (
      Boolean(this.state.contacts.find(contact => contact.name === data.name))
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: prevState.contacts.concat(data),
      }));
    }
  };

  onDeleteContact = deleteItem => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteItem),
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.onInput} />
        <ContactList
          onClick={this.onDeleteContact}
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
