import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
 
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
 
    <Container className="py-5">
 
      <h1 className="mb-4">Admin Dashboard</h1>
 
      <Table
        bordered
        hover
        responsive
        style={{
          backgroundColor: "#0b2028",
          color: "#C6BFBB",
          borderColor: "#1a3038",
        }}
      >
 
        <thead style={{ backgroundColor: "#1a3038", color: "#3c9dc7" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
 
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id} style={{ borderColor: "#1a3038" }}>
 
              <td>{contact.name}</td>
 
              <td>{contact.email}</td>
 
              <td>{contact.message}</td>
 
              <td>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteContact(contact._id)}
                >
                  Delete
                </Button>
              </td>
 
            </tr>
          ))}
        </tbody>
 
      </Table>
 
    </Container>
 
  );
}