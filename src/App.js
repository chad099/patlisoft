import React, { Component} from "react";
import './styles/app.scss';

class App extends Component{
  render(){
    return(
      <div className="">
        {this.props.children}
      </div>
    );
  }
}

export default App;
