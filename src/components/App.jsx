import { Component } from 'react';

import {
  ContactForm,
  Contacts,
  Container,
  InputFiltr,
  Section,
} from 'components';

import { nanoid } from 'nanoid';

const CONTACTS_LOCAL_STORAGE_KEY = 'contacts';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem(CONTACTS_LOCAL_STORAGE_KEY);
    if (storageContacts && storageContacts !== 0) {
      this.setState({ contacts: JSON.parse(storageContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      this.updateLocaleStorage(contacts);
    }
    if (contacts.length === 0) {
      localStorage.removeItem(CONTACTS_LOCAL_STORAGE_KEY);
    }
  }

  updateLocaleStorage = contacts => {
    const savedContacts = JSON.stringify(contacts);
    localStorage.setItem(CONTACTS_LOCAL_STORAGE_KEY, savedContacts);
  };

  addNewContact = ({ name, number }) => {
    const existingContact = this.checkIfContactExist(name);

    if (!existingContact) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(
        prevState => ({
          contacts: [...prevState.contacts, newContact],
        }),
        () => {
          localStorage.setItem(
            CONTACTS_LOCAL_STORAGE_KEY,
            JSON.stringify(this.state.contacts)
          );
        }
      );
    } else {
      alert(`${name} already exists!`);
    }
  };

  checkIfContactExist(name) {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    const deletedContact = this.state.contacts.find(
      contact => contact.id === id
    );
    if (deletedContact) {
      this.setState(state => ({
        contacts: state.contacts.filter(contact => contact.id !== id),
      }));
      localStorage.setItem(
        CONTACTS_LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
      alert(`${deletedContact.name} has beedn removed!`);
    }
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm handler={this.addNewContact} />
        </Section>
        <Section title={'Contacts'}>
          <InputFiltr value={filter} onChange={this.handleFilterChange} />
          <Contacts
            contacts={filteredContacts}
            handleDelete={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
