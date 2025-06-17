import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Киоск Фаст-Фуд</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#ffcc00',
  padding: '10px',
  textAlign: 'center',
};

export default Header;
