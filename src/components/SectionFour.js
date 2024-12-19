import React from 'react';
import demoVideo from '../assets/demo.mp4'; // Adjust the path based on your folder structure

const SectionFour = () => {
  return (
    <div style={styles.sectionFour}>
      {/* Left Side - Video */}
      <div style={styles.leftContent}>
        <video
          style={styles.video}
          src={demoVideo} // Use the imported video
          controls
          alt="Demo Video"
        />
      </div>

      {/* Right Side - Text and Button */}
      <div style={styles.rightContent}>
        <h2 style={styles.heading}>OKR Management Software</h2>
        <p style={styles.subheading}>Strategy-execution made easy</p>
        <hr style={styles.line} />
        <p style={styles.description}>
          Bridge your strategy-execution gap using <b>Profit.co OKR Software</b>
          <br />
          Take advantage of this powerful goal-setting framework with benefits
          like:
        </p>
        <ul style={styles.benefitsList}>
          <li>✅ Agile alignment</li>
          <li>✅ Faster adaptation and execution</li>
          <li>✅ Guided weekly check-ins</li>
        </ul>
        <button style={styles.button}>Get Your Free Demo</button>
      </div>
    </div>
  );
};

// Styles for the section
const styles = {
  sectionFour: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px 60px',
    backgroundColor: '#f5f5f5',
  },
  leftContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '90%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  rightContent: {
    flex: 1,
    padding: '0 40px',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '10px',
  },
  line: {
    width: '50px',
    border: '1px solid #333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  benefitsList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#ff6f00',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default SectionFour;
