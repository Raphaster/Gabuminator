import React from 'react';
import { StyleSheet } from 'react-native';

function DialogBar() {
  return (
    <div style={styles.dialog}>
      <p>Sample text</p>
    </div>
  );
}

const styles = StyleSheet.create({
    dialog: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
  },
});

export default DialogBar;