import { useState } from "react";
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactsForm.styled';

export function ContactForm ({onAddContact}) {
    const [id, setId] = useState(nanoid());
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameId = nanoid();
    const numberId = nanoid();

    const handleNameInput = (evt) =>  {
        const {name, value} = evt.target;

        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        onAddContact({ id, name, number });
        setName('');
        setNumber('');
        setId('');
    }

    return (
            <Form onSubmit={handleSubmitForm}>
                <Label htmlFor={nameId}>Name</Label>
                <Input onChange={handleNameInput}
                    value={name}
                    id={nameId}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                <Label htmlFor={numberId}>Number</Label>
                <Input
                    onChange={handleNameInput}
                    value={number}
                    id={numberId}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <Button type='submit'> Add contact</Button>
            </Form>
        )
}