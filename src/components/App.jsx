import { nanoid } from 'nanoid';
import { Component } from "react";
import { Button, Form } from "./Form/Form.styled";
import { Section } from "./Section/Section";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = e => {    
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    // Проп который передается форме для вызова при сабмите
    //this.props.onSubmit({ ...this.state });
  };

  handleClick = e => {    
    const newEl = { id: nanoid(), name: this.state.name, number: this.state.number};    
    this.setState(prevState => {
      console.log({ contacts: [newEl, ...prevState.contacts] });
      return { contacts: [newEl, ...prevState.contacts] }
    })
  }

  handleFilter = e => {
    this.setState({ filter: e.target.value });   
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  
  render() {    
    const { contacts} = this.state;    
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <Section title="PhoneBook">
          <Form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
              />
            </label>
            <p>
              <Button type="submit" onClick={this.handleClick}>
                Add contact
              </Button>
            </p>
          </Form>
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 && (
            <>
              <label>Find contacts by name
                <input type="filter" name="filter" value={this.state.filter} onChange={this.handleFilter}/>
              </label>
              <ul>
                {filteredContacts.map(contact => (
                  <li key={nanoid()}>
                    {contact.name} {contact.number}
                  </li>
                ))}
              </ul>
            </>
          )}
        </Section>
      </div>
    );
  }
};
