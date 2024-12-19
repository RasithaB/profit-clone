import React from 'react';
import demoVideo from '../assets/performance-management.mp4'; // Replace with your actual video path

const SectionFive = () => {
  return (
    <div style={styles.sectionFive}>
      {/* Left Side - Text Content */}
      <div style={styles.leftContent}>
        <h2 style={styles.heading}>Performance Management Software</h2>
        <p style={styles.subheading}>Build a high performance team</p>
        <hr style={styles.line} />
        <p style={styles.description}>
          <strong>Boost employee performance</strong> with our customizable{' '}
          <a href="/performance-management" style={styles.link}>Performance Management Software</a>. {/* Add a valid URL */}
        </p>
        <p style={styles.description}>
          Build a high-performance workplace culture with benefits like:
        </p>
        <ul style={styles.benefitsList}>
          <li>✅ Customizable performance review process</li>
          <li>✅ High-performance work culture</li>
          <li>✅ Talent identification and nurturing</li>
        </ul>
        <button style={styles.button}>Get Your Free Demo</button>
        <button onClick={() => alert("More info clicked")} style={styles.infoButton}>Get more info →</button> {/* Replaced anchor tag with button */}
      </div>

      {/* Right Side - Video */}
      <div style={styles.rightContent}>
        <video
          style={styles.video}
          src={demoVideo} // Replace with your actual video path
          controls
          alt="Performance Management Demo"
        />
      </div>
    </div>
  );
};

// Styles for the SectionFive Component
const styles = {
  sectionFive: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px 60px',
    backgroundColor: '#fff',
    gap: '20px',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  line: {
    width: '50px',
    border: '1px solid #333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
    lineHeight: '1.5',
  },
  benefitsList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#ff6f00',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  infoButton: {
    background: 'none',
    color: '#007bff',
    fontSize: '14px',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginLeft: '15px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  video: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default SectionFive;
