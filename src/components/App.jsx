import React, { Component } from "react";
import Notiflix, { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'

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

export class App extends Component {

  state = {
    contacts: [
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

componentDidMount() {
  const storagedPhonebook = JSON.parse(localStorage.getItem("phonebook"))
  if(storagedPhonebook) {
    this.setState({contacts: storagedPhonebook})}
  }

componentDidUpdate(prevProps, prevState) {
  if(this.state.contacts !== prevState.contacts) {
    localStorage.setItem("phonebook", JSON.stringify(this.state.contacts))
  }
}

onSubmitForm = (contact) => {
    const checkDuplicate = () => {
      return this.state.contacts.some(cnt => {
        return cnt.name.toLowerCase() === contact.name.toLowerCase()
      })
    }

    if(checkDuplicate()) {
      return Notify.failure(`${contact.name} is already in the list`);
    } else {
      this.setState(prevState => ({contacts: [contact, ...prevState.contacts]}))
    }
  }

onDeleteContact = (contactId) => {
    this.setState(prevState => ({contacts: prevState.contacts.filter((contact) => contact.id !== contactId)}))
  }

onFilterInput = (evt) => {
    this.setState({ filter: evt.target.value});
}

onFilterList = () => {
  const { filter, contacts } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return (contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)));
};

  render() {
    
    const {
      onSubmitForm, 
      onFilterInput, 
      onDeleteContact, 
      onFilterList,
      state: {filter}} = this;

    const filered = onFilterList();

    return (
    <Container>

        <Header>Phonebook</Header>
          <ContactForm onAddContact={onSubmitForm}/>

        <SubHeader>Contacts</SubHeader>
           <Filter value={filter} onChange={onFilterInput}/>
          <ContactsList contactsList={filered} onDelContact={onDeleteContact}/>

    </Container>);
  }
};
