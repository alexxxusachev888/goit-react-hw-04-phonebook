import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useLocaleStorage } from '../hooks/useLocalStorage';

import { ContactsList } from "./ContactsList/ContactsList";
import { ContactForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { Container, Header, SubHeader } from "./App.styled";

export function App () {
  const [contacts, setContacts] = useLocaleStorage("phonebook", []);
  const [filter, setFilter] = useState('');

const onSubmitForm = (contact) => {
    const checkDuplicate = () => {
      return contacts.some(cnt => {
        return cnt.name.toLowerCase() === contact.name.toLowerCase()
      })
    }

    if(checkDuplicate()) {
      return Notify.failure(`${contact.name} is already in the list`);
    } else {
      setContacts(prevState => {
        return ([contact, ...prevState])
      })
    }
  }

const onDeleteContact = (contactId) => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId)
    });
  }

const onFilterInput = (evt) => {
    setFilter(evt.target.value);
}

const onFilterList = () => {
  return (contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase())
  }));
};

const filered = onFilterList();

return (
<Container>
    <Header>Phonebook</Header>
      <ContactForm onAddContact={onSubmitForm}/>
    <SubHeader>Contacts</SubHeader>
        <Filter value={filter} onChange={onFilterInput}/>
      <ContactsList contactsList={filered} onDelContact={onDeleteContact}/>
</Container>);
};
