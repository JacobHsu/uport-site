import React from 'react';
import { connect } from "react-redux";

import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <Header />
    )
  }
}

export default connect()(Home);
