import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

const styles = {
  root: {
    background: '#e7e7e7'
  },
  myButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#333',
      color: '#eee'
    }
  }
};

class Hello extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <button className={classes.myButton}>Hello world!</button>
        <button className={classes.myButton}>Hello world!</button>
      </div>
    );
  }
}

export default injectSheet(styles)(Hello);
