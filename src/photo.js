import React from 'react';

const Photo = () => {
  return (
    <div style={styles.photoContainer}>
      <img
        src="https://via.placeholder.com/800x400"
        alt="Sample"
        style={styles.photo}
      />
    </div>
  );
};

const styles = {
  photoContainer: {
    textAlign: 'center',
    margin: '20px 0'
  },
  photo: {
    maxWidth: '100%',
    height: 'auto',
  }
};

export default Photo;