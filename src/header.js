import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Welcome to My Landing Page</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
  }
};

export default Header;