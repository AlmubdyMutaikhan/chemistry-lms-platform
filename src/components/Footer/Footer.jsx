import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <p>© 2024 Қызықты химия. Барлық құқықтар қорғалған.</p>
            </div>
        </footer>
    );
};

const footerStyle = {
    width: '100%',
    background: '#333',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    padding: '10px 0'
};

const footerContentStyle = {
    maxWidth: '980px',
    margin: '0 auto',
    padding: '0 20px'
};

export default Footer;
