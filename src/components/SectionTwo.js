import React, { useState } from 'react';
import yourImage from '../assets/9876.png'; // Ensure the image path is correct
import { FaComment } from 'react-icons/fa'; // FontAwesome comment icon

const SectionTwo = () => {
  const [isCommentBoxVisible, setCommentBoxVisible] = useState(false);

  const toggleCommentBox = () => {
    setCommentBoxVisible(!isCommentBoxVisible);
  };

  return (
    <div style={styles.sectionTwo}>
      <div style={styles.content}>
        {/* Add the image here */}
        <img src={yourImage} alt="Supercharge Your Business" style={styles.image} />
      </div>

      {/* Static comment box at the bottom-right corner */}
      {isCommentBoxVisible && (
        <div style={styles.commentBox}>
          <textarea style={styles.textarea} placeholder="Leave a comment..."></textarea>
        </div>
      )}

      {/* Comment icon */}
      <div style={styles.commentIcon} onClick={toggleCommentBox}>
        <FaComment style={styles.icon} />
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
    position: 'relative', // Make sure the container is positioned relative to place the comment box
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
  // Comment Box Styles
  commentBox: {
    position: 'fixed',
    bottom: '20px', // Distance from the bottom of the screen
    right: '20px', // Distance from the right side of the screen
    backgroundColor: '#007bff', // Blue color for the box
    padding: '10px',
    borderRadius: '8px', // Optional: rounded corners
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Optional: shadow for better visibility
    zIndex: 1000, // Ensure it stays on top of other content
  },
  textarea: {
    width: '250px', // Adjust width as necessary
    height: '100px', // Adjust height as necessary
    padding: '10px',
    borderRadius: '5px', // Rounded corners for the textarea
    border: '1px solid #007bff', // Blue border to match the comment box
    outline: 'none',
    resize: 'none', // Prevent resizing the textarea
    fontSize: '1rem',
  },
  // Comment Icon Styles
  commentIcon: {
    position: 'fixed',
    bottom: '80px', // Position the comment icon above the comment box
    right: '20px', // Position the icon 20px from the right
    backgroundColor: '#007bff', // Blue background for the icon
    padding: '10px',
    borderRadius: '50%', // Circular icon
    cursor: 'pointer',
    zIndex: 1000, // Ensure the icon stays on top of other content
  },
  icon: {
    fontSize: '30px', // Size of the comment icon
    color: '#fff', // White color for the icon
  },
};

export default SectionTwo;
