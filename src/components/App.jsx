import { useEffect, useState } from 'react';

import {
  ContactForm,
  Contacts,
  Container,
  InputFiltr,
  Section,
} from 'components';

import { nanoid } from 'nanoid';

const CONTACTS_LOCAL_STORAGE_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = localStorage.getItem(CONTACTS_LOCAL_STORAGE_KEY);
    if (storageContacts && storageContacts !== 0) {
      setContacts(JSON.parse(storageContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ name, number }) => {
    const existingContact = checkIfContactExist(name);

    if (!existingContact) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(
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

  const checkIfContactExist = ({ name }) => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    const deletedContact = contacts.find(contact => contact.id === id);
    if (deletedContact) {
      setContacts(contacts => ({
        contacts: contacts.filter(contact => contact.id !== id),
      }));
      localStorage.setItem(
        CONTACTS_LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
      alert(`${deletedContact.name} has beedn removed!`);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm handler={addNewContact} />
      </Section>
      <Section title={'Contacts'}>
        <InputFiltr value={filter} onChange={handleFilterChange} />
        <Contacts contacts={filteredContacts} handleDelete={deleteContact} />
      </Section>
    </Container>
  );
}
