import React, { PureComponent } from 'react';
import classes from './Hello2.module.scss';

class Hello2 extends PureComponent {
  render() {
    return (
      <div className={classes.root}>
        <button className={classes.myButton}>Hello world!</button>
        <button className={classes.myButton}>Hello world!</button>
      </div>
    );
  }
}

export default Hello2;