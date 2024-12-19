import React from 'react';

function SectionNine() {
  return (
    <div style={{ backgroundColor: '#0A122A', color: '#FFFFFF', padding: '60px 0' }}>
      {/* Centered Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '600',
          lineHeight: '1.4',
          margin: '0 auto',
          maxWidth: '600px',
        }}>
          Execute your strategy with the<br />
          industry's most preferred and<br />
          intuitive software
        </h2>
        <button style={{
          backgroundColor: '#FF6A3D',
          color: '#FFFFFF',
          border: 'none',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '20px',
        }}>
          Get a Free Demo
        </button>
      </div>

      {/* Footer Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        borderTop: '1px solid #333',
        padding: '40px 20px',
      }}>
        {/* Company Column */}
        <div>
          <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Company</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}>About Us</li>
            <li style={{ marginBottom: '8px' }}>Products</li>
            <li style={{ marginBottom: '8px' }}>In the Press</li>
            <li style={{ marginBottom: '8px' }}>Our Partners</li>
            <li style={{ marginBottom: '8px' }}>Terms of Service</li>
            <li style={{ marginBottom: '8px' }}>SLA</li>
            <li style={{ marginBottom: '8px' }}>Privacy Policy</li>
            <li>Data Security</li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Resources</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}>OKR Certification</li>
            <li style={{ marginBottom: '8px' }}>OKR University</li>
            <li style={{ marginBottom: '8px' }}>OKR eBooks</li>
            <li style={{ marginBottom: '8px' }}>KPIs Library</li>
            <li style={{ marginBottom: '8px' }}>Performance Management</li>
            <li style={{ marginBottom: '8px' }}>Behavioral Economics</li>
            <li style={{ marginBottom: '8px' }}>OKR Examples</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Support</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}>Contact Us</li>
            <li style={{ marginBottom: '8px' }}>Answers</li>
            <li style={{ marginBottom: '8px' }}>OKR Canvas</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Apps Column */}
        <div>
          <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>APPS</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ width: '140px' }} />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ width: '140px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Windows_Store_badge.svg" alt="Windows Store" style={{ width: '140px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionNine;
