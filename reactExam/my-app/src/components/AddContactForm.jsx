import React, { useState } from "react";

const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      addContact({ name, phone });
      setName("");
      setPhone("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} className="input1" />
        <br />
          <input type="text" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <button type="submit">Добавить контакт</button> 
      </form>
    </div>
  );
};

export default AddContactForm;