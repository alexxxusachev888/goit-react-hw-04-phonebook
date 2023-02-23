import PropTypes from 'prop-types';
import { ContactElem } from 'components/ContactElem/ContactElem';
import { ListOfContacts } from './ContactsList.styled';

export function ContactsList({contactsList, onDelContact}) {
    return (
        <ListOfContacts>
            {contactsList.map(({id, name, number}) => {
                return (<ContactElem id={id} name={name} number={number} onDelCnt={onDelContact}/>)
            })}
        </ListOfContacts>
    )
}

ContactsList.propTypes = {
    contactsList: PropTypes.array.isRequired,
    onDelContact: PropTypes.func.isRequired,
}
