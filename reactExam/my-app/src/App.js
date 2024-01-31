import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import axios from "axios";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/contacts")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const addContact = (contact) => {
    axios.post("http://localhost:4000/contacts", contact)
      .then((response) => {
        setContacts([...contacts, response.data]);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const deleteContact = (id) => {
    axios.delete(`http://localhost:4000/contacts/${id}`)
      .then(() => {
        setContacts(contacts.filter((contact) => contact.id !== id));
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className="main">
      <div>
        <h1 className="h1">Контактная книга</h1>
        
        <div className="add">
          <AddContactForm addContact={addContact} />
        </div>

        <div className="list">
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        </div>
      </div>
    </div>
  );
};

export default App;
