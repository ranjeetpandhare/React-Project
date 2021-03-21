import React from 'react';
import withData from './WithData';

function MyComponent({ data }) {
  if (this.data) {
    return <div>{this.data}</div>;
  }
 
}

export default withData(MyComponent, 'Test');