import React from "react";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button className="buttonDelete" onClick={() => deleteContact(contact.id)}>Удалить</button> <br /> <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;