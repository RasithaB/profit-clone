import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      {/* Left Section */}
      <div className="left-section">
        <h1>OKR Software to Execute Your Strategy with Precision</h1>
        <p>Focus on Goals. Measure your Progress. Achieve Results.</p>
        <button className="demo-button">Get Your Free Demo</button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="card">
          <h3>OKRs</h3>
          <p>Accelerate User Acquisition</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "65%" }}></div>
          </div>
          <p>Key Results:</p>
          <ul>
            <li>Increase paid users from 40k to 100k - 59%</li>
            <li>Increase renewal rate from 75% to 95% - 71%</li>
          </ul>
        </div>

        <div className="card">
          <h3>Performance Review</h3>
          <p>Annual Performance Review</p>
          <p>
            <strong>Performance Score:</strong> 4.9/5
          </p>
          <p>
            <strong>Potential Score:</strong> 3.4/5
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
