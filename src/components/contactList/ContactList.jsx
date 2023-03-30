import css from './contactlist.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  onDeleteContact = deleteItem => {
    this.props.onClick(deleteItem);
  };
  render() {
    const { contacts, filter } = this.props;
    return (
      <>
        <ul>
          {contacts
            .filter(item => item.name.toLowerCase().includes(filter))
            .map(contact => {
              return (
                <li key={contact.name}>
                  {contact.name}: {contact.number}
                  <button
                    className={css.deleteBtn}
                    onClick={() => this.onDeleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
