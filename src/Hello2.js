import React, { PureComponent } from 'react';
import cl from './Hello2.module.scss';

const join = (...arr) => arr.join(' ');

class Hello2 extends PureComponent {
  render() {
    const { isAlternate } = this.props;
    return (
      <div className={cl.root}>
        <button className={cl.myButton}>Hello world!</button>
        <button className={join(cl.myButton, isAlternate && cl.myButton_alternate)}>Hello world!</button>
      </div>
    );
  }
}

export default Hello2;