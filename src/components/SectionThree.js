import React from 'react';
import okrImage from '../assets/12345.png'; // Ensure the image path is correct

const SectionThree = () => {
  return (
    <div style={styles.sectionThree}>
      <div style={styles.centerContent}>
        <h2 style={styles.heading}>
          Top Enterprises, Including Fortune 500 Titans, Trust Our Performance & OKR Software for Strategic Alignment & Success
        </h2>

        {/* Add alt attribute for image */}
        <img src={okrImage} alt="OKR and Performance Management Platform" style={styles.image} />

        <p style={styles.subheading}>
          Manage Your Strategy, OKRs, People, Process & Performance In One Platform
        </p>
      </div>
    </div>
  );
};

const styles = {
  sectionThree: {
    width: '100%',
    minHeight: '80vh', // Adjusted height to reduce unnecessary space
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'center', // Horizontally center content
    justifyContent: 'center', // Vertically center content
    backgroundColor: '#fff', // White background
    textAlign: 'center', // Center text horizontally
    padding: '20px', // Reduced padding
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'center', // Horizontally center content
    justifyContent: 'center', // Vertically center content
    height: '100%', // Take full height
  },
  heading: {
    fontSize: '2rem', // Adjust font size as needed
    marginBottom: '20px', // Reduced space between heading and content
    color: '#333',
    lineHeight: '1.4', // Line height for better spacing
    textAlign: 'center', // Ensure text is centered
    padding: '0 30px', // Add left and right padding for spacing
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '20px', // Reduced space between image and subheading
    color: '#555',
    textAlign: 'center', // Ensure text is centered
    fontWeight: 'bold', // Make the subheading text bold
  },
  image: {
    maxWidth: '100%', // Ensure the image does not exceed the width
    height: 'auto', // Maintain aspect ratio
    marginTop: '20px', // Reduced margin between heading and image
    borderRadius: '8px', // Optional: add rounded corners to the image
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Optional: add a slight shadow to the image
  },
};

export default SectionThree;
