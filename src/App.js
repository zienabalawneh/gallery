import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './components/Data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

constructor(props){
  super(props)
  this.state = {
 
  show:false,
  myarr:{},
  Data:Data
  }
}


  handleShow = () => {
    this.setState({
      show: true,
    })
  
  }
  handleClose = () => {
    this.setState({
      show: false,
    })
  }

getMyArr=(title)=>{
const  myarr= Data.find(val=>{

  if (val.title === title) {
    return val;

  }

})
this.setState({
  show: true,
  myarr:myarr,
})

}




render(){


return(
  <>
  <Header/>
  <Main Data={this.state.Data}  handleShow={this.handleShow}            getMyArr={this.getMyArr}   />
  <SelectedBeast  handleClose={this.handleClose}  show={this.state.show}   myarr={this.state.myarr}           />
  <Footer/>
  </>
);


}

}


export default App;




























