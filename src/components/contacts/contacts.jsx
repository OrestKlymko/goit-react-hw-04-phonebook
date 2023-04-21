import { nanoid } from 'nanoid';
import React, {useState} from 'react';
import css from './form.module.css';
export  function Form (props) {

  const [state,setState] = useState({name:'',number:''})

  const onInputChange = e => {
    setState({  ...state,[e.currentTarget.name]: e.currentTarget.value } )
  };

const formSubmit = (e) => {
    e.preventDefault();
    props.formSubmit({ ...state,id:nanoid() })
    setState({
      name: '',
      number: '',
    });
  };




    const nameID = nanoid();
    const telID = nanoid();

    return (
      <div>
        <form className={css.form} onSubmit={formSubmit} >
          <label id={nameID} className={css.label}>
            Name
            <input
              id={nameID}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={state.name}
              onChange={onInputChange}
            />
          </label>
          <label id={telID} className={css.label}>
            Number
            <input
              id={telID}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onInputChange}
              value={state.number}
            />
          </label>
          <button type="submit" className={css.submitBtn}>
            Add contact
          </button>
        </form>
      </div>
    );
}
