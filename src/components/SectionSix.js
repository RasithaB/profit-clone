import React from 'react';
import yourImage from '../assets/2525.png'; // Ensure the image path is correct

const SectionTwo = () => {
  return (
    <div style={styles.sectionTwo}>
      <div style={styles.content}>
        {/* Add the image here */}
        <img src={yourImage} alt="Supercharge Your Business" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  sectionTwo: {
    minHeight: '80vh', // Adjusted height to reduce extra space
    backgroundColor: '#fff',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px', // Space between elements
    width: '100%', // Make sure the content takes up full width of the section
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  image: {
    width: '100%', // Image will span the entire width of the container
    height: 'auto', // Automatically adjust the height to maintain the aspect ratio
    marginTop: '20px',
    borderRadius: '8px', // Optional: add rounded corners
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Optional: add a slight shadow
  },
};

export default SectionTwo;
