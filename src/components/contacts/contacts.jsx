import { nanoid } from 'nanoid';
import css from './form.module.css';
const { Component } = require('react');

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const name = nanoid();
    const tel = nanoid();

    return (
      <div>
        <form className={css.form} onSubmit={this.onSubmitForm}>
          <label id={name} className={css.label}>
            Name
            <input
              id={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onInputChange}
            />
          </label>
          <label id={tel} className={css.label}>
            Number
            <input
              id={tel}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.onInputChange}
              value={this.state.number}
            />
          </label>
          <button type="submit" className={css.submitBtn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
