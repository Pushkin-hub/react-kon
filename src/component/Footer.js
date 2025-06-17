import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2023 Киоск Фаст-Фуд. Все права защищены.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'absolute',
  bottom: 0,
  width: '100%',
};

export default Footer;
