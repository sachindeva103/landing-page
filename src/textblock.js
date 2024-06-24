import React from 'react';

const TextBlock = () => {
  return (
    <div style={styles.textBlock}>
      <h2>About This Page</h2>
      <p>This is a simple landing page created with React.js. It includes a header, an image, and this block of text.</p>
    </div>
  );
};

const styles = {
  textBlock: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  }
};

export default TextBlock;