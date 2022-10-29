import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export function ContactList({ dataFiltered }) {
  return (
    <ul>
      {dataFiltered.map(contact => (
        <li key={nanoid()}>
          {contact.name} {contact.number}
        </li>
      ))}
    </ul>
  );
}
