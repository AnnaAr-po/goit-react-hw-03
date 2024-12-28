
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contact}>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => onDeleteContact(id)} className={css.button}>Delete</button>
  </li>
);

export default Contact;