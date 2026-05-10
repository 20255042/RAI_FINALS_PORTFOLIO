
import { useEffect, useState } from "react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export default function Admin() {

  const [contacts, setContacts] =
    useState<Contact[]>([]);

  const fetchContacts = async () => {

    const res = await fetch(
      "http://localhost:5000/contacts"
    );

    const data = await res.json();

    setContacts(data);

  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (
    id: string
  ) => {

    await fetch(
      `http://localhost:5000/contacts/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchContacts();

  };

  return (

    <div style={{ padding: "50px" }}>

      <h1>Admin Dashboard</h1>

      <table
        border={1}
        cellPadding={10}
      >

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {contacts.map((contact) => (

            <tr key={contact._id}>

              <td>{contact.name}</td>

              <td>{contact.email}</td>

              <td>{contact.message}</td>

              <td>

                <button
                  onClick={() =>
                    deleteContact(contact._id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}


