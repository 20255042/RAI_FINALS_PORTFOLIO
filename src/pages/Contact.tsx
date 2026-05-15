import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {

  const [formData, setFormData] =
    useState<FormData>({
      name: "",
      email: "",
      message: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [status, setStatus] =
    useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      return "Please fill in all fields.";
    }

    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(formData.email)) {
      return "Invalid email format.";
    }

    return "";
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      setStatus(error);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await emailjs.send(
        "service_a7xxij8",
        "template_7sfdzhf",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "7VRK3JNIGy03lQ4pm"
      );

      console.log("EMAIL SENT:", response);

    } catch (emailError: any) {

      console.error("EMAILJS ERROR:", emailError);
      setStatus(
        "Failed to send email. Please check your EmailJS configuration."
      );
      setLoading(false);
      return;

    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const data = await res.json();

      console.log("MONGODB RESPONSE:", data);

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (dbError: any) {

      console.error("SERVER ERROR:", dbError);
      setStatus(
        "Email sent, but failed to save your message. Please try again."
      );

    }

    setLoading(false);

  };

  return (

    <Container className="py-5">
      <Row className="align-items-center">

        
        <Col md={5} className="mb-4 mb-md-0">
          <h1>Let's Chat.</h1>
          <p>Let me know how we can best serve you.</p>
        </Col>

        
        <Col md={7}>
          <form onSubmit={handleSubmit}>

          
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="outline-info"
              disabled={loading}
              className="w-100"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

          </form>

          <p className="mt-3">{status}</p>

        </Col>
      </Row>
    </Container>

  );

};

export default Contact;
