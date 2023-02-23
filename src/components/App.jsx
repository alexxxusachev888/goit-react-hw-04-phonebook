import { useState, useEffect } from "react";
import Notiflix, { Notify } from 'notiflix/build/notiflix-notify-aio';
import { mockPhones } from './mockPhones';

import { ContactsList } from "./ContactsList/ContactsList";
import { ContactForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { Container, Header, SubHeader } from "./App.styled";

Notiflix.Notify.init({
  width: '280px',
  position: 'top-top',
  distance: '250px',
  opacity: 1,
});

export function App () {
  const [contacts, setContacts] = useState(mockPhones);
  const [filter, setFilter] = useState('');

useEffect(()=> {
    window.localStorage.setItem("phonebook", JSON.stringify(contacts));

  }, [contacts]);

/* componentDidMount() {
  const storagedPhonebook = JSON.parse(localStorage.getItem("phonebook"))
  if(storagedPhonebook) {
    this.setState({contacts: storagedPhonebook})}
  } */

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
