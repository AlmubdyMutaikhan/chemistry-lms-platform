import React, { useState } from 'react';

const ContactPage = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
        alert('Хабарламаңыз үшін рахмет!');
        setContact({ name: '', email: '', message: '' });
    };

    // Styles object for better management of inline styles
    const styles = {
        container: {
            marginTop: '100px',
            background: 'white',
            padding: '20px',
            maxWidth: '600px',
            margin: '40px auto',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '8px'
        },
        formGroup: {
            margin: '10px 0'
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
        },
        input: {
            width: '100%',
            padding: '8px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
        },
        button: {
            padding: '10px 20px',
            background: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
        }
    };

    return (
        <div style={styles.container}>
            <h2>Бізбен байланысыңыз</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="name">Атыңыз:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="email">Электрондық пошта:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="message">Хабарлама:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={contact.message}
                        onChange={handleChange}
                        style={{...styles.input, height: '100px'}}
                    />
                </div>
                <button type="submit" style={styles.button}>
                    Жіберу
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
