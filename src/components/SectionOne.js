import React from 'react';
import okrImage from '../assets/0250e485-okr-software.png';

const SectionOne = () => {
  return (
    <div style={styles.sectionOne}>
      <div style={styles.contentWrapper}>
        <div style={styles.textContent}>
          <h2 style={styles.heading}>OKR Software to Execute Your Strategy with Precision</h2>
          <p style={styles.subText}>Focus on Goals. Measure your Progress. Achieve Results.</p>
          <button style={styles.button}>Get Your Free Demo</button>
        </div>
        <div style={styles.imageContainer}>
          <img
            src={okrImage}
            alt="OKR Dashboard Example"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  sectionOne: {
    display: 'flex',
    alignItems: 'center', // Centers content vertically
    justifyContent: 'center', // Centers content horizontally
    height: 'calc(100vh - 60px)', // Full height minus navbar height
    backgroundColor: '#f5f5f5',
    boxSizing: 'border-box',
    padding: '20px',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px', // Adds space between the text and image
    maxWidth: '1200px', // Restricts the content width
    width: '100%',
  },
  textContent: {
    flex: 1,
    textAlign: 'left',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    margin: '0 0 20px',
  },
  subText: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#ff6f00',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'right',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};

export default SectionOne;
