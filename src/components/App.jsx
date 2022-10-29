import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = data => {
    const newEl = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (this.findContact(data.name)) {
      window.alert(`${data.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => {
        //  console.log({ contacts: [newEl, ...prevState.contacts] });
        return { contacts: [newEl, ...prevState.contacts] };
      });
    }
  };

  findContact = contactToFind => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name === contactToFind);
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <Section title="PhoneBook">
          <ContactForm onSubmit={this.handleSubmit} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 && (
            <>
              <Filter
                filter={this.state.filter}
                findInList={this.handleFilter}
              />
              <ContactList dataFiltered={filteredContacts} />
            </>
          )}
        </Section>
      </div>
    );
  }
}
