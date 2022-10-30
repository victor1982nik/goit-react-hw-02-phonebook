import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export function ContactList({ dataFiltered, onDelete }) {
  return (
    <ul>
      {dataFiltered.map((contact, index) => (
        <li key={nanoid()}>
          {contact.name} {contact.number}{' '}
          <button type="button" onClick={() => onDelete(contact.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
