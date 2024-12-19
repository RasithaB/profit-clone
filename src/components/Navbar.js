import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <img
        src="https://storage.googleapis.com/profit-prod/wp-content/uploads/2021/07/1fd50c6d-profit.co-logo.png"
        alt="Logo"
        style={styles.logo}
      />
      <div style={styles.menu}>
        <a href="#products" style={styles.link}>Products</a>
        <a href="#pricing" style={styles.link}>Pricing</a>
        <a href="#resources" style={styles.link}>Resources</a>
        <a href="#support" style={styles.link}>Support</a>
        <button style={styles.demoButton}>Get Your Free Demo</button>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
  logo: {
    height: '30px',
    width: 'auto',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  },
  demoButton: {
    padding: '8px 15px',
    backgroundColor: '#ff6f00',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Navbar;
