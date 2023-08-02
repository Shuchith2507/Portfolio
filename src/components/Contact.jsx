import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('api/contact', formData)
            .then((response) => {
                console.log(response.data.message);
                // Add logic to handle successful form submission here

                // Clear the form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error(error.response.data.message);
                // Add logic to handle form submission error here
            });
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
