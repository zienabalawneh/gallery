import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './components/data.json';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    dataArr:data,
    }
  }

  


  render() {
    return (
      <>
      <Header/>
      <Main  beastArr={this.state.dataArr}/>
     
     <Footer/>

      </>
    )
  }
}
  export default App; 
