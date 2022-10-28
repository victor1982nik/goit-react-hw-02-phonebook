import { nanoid } from 'nanoid';
import { Component } from "react";
import { Button, Form } from "./Form/Form.styled";
import { Section } from "./Section/Section";

export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    // Проп который передается форме для вызова при сабмите
    //this.props.onSubmit({ ...this.state });
  };

  handleClick = e => {
    
    const newEl = { id: nanoid(), name: this.state.name };    
    this.setState(prevState => {
      console.log({ contacts: [newEl, ...prevState.contacts] });
      return { contacts: [newEl, ...prevState.contacts] }
    })
  }
  
  render() {    
    const { contacts } = this.state;
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
            <p>
              <Button type="submit" onClick={this.handleClick}>Add contact</Button>
            </p>
          </Form>
        </Section>
        
        <Section title="Contacts">
          {contacts.length > 0 &&
            <ul>{contacts.map(contact => <li>{contact.name}</li>)}</ul>}
        </Section>
      </div>
    );
  }
};
