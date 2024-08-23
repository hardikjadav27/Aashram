import React, { useState } from 'react';
import '../Style/Joinform.css';

const VolunteerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic (e.g., API call)
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="volunteer-form-container">
            <h2>Volunteer Now</h2>
            <p>Become a volunteer with Sri Ram Ashram and Gaushala Trust. Your proactive engagement fuels our mission of creating a compassionate and harmonious society. Join us today.</p>
            <h3>By Appointment Only</h3>
            <p>Call or email to us: +918306309039 / 8619449634</p>
            <p>akshatkumarsharma2244@gmail.com</p>
            <form onSubmit={handleSubmit} className="volunteer-form">
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
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
};

export default VolunteerForm;
