import { nanoid } from 'nanoid';
const { Component } = require('react');

export class Filter extends Component {
  filterChange = e => {
    this.props.onChange(e.currentTarget.value);
  };
  render() {
    const filter = nanoid();
    return (
      <div>
        <div>Find contacts by name</div>
        <label id={filter}>
          <input
            id={filter}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.filterChange}
          />
        </label>
      </div>
    );
  }
}
