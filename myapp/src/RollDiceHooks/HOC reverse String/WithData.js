import React, { Component } from 'react';

function WithData(MyComponent, name) {
  return class Data extends Component {
    state = { data: null };
    componentDidMount() {
      this.setState({ data: `Hello, ${name}!` });
    }
    render() {
      return <MyComponent {...this.props} data={this.state.data} />;
    }
  };
}

export default WithData;