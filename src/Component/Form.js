import React, { useState } from 'react'
import axios from 'axios'
import '../css/Form.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // phone: '',
    message: '',
  })
  const [responseMessage, setResponseMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `https://cegom-api.vercel.app/api/example-form`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            mode: 'no-cors',
          },
        }
      )
      setResponseMessage('Message sent successfully!')
    } catch (error) {
      setResponseMessage('Failed to send message.')
    }
  }

  return (
    <section id="contact-us" className="contact-form">
      <h2>Contact with us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Please ask your questions here"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </section>
  )
}

export default ContactForm
