import PropTypes from 'prop-types';
import { FcContacts } from 'react-icons/fc';
import {Contact, Name, Number, Button } from './ContactElem.styled';

export function ContactElem({id, name, number, onDelCnt}) {
    return (
        <Contact key={id}>
            <FcContacts/>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <Button onClick={()=> onDelCnt(id)}>Delete</Button>
        </Contact>
    )
}

ContactElem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelCnt: PropTypes.func.isRequired,
}