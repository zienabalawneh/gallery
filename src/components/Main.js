import React from 'react';
import HornedBeast from './HornedBeast';




class Main extends React.Component {




  constructor(props) {
    super(props);
    this.state = {
      dif: 'hi',
    }
  }

  info = () => {
    this.setState({
      dif: 'aaa'
    
    })


  }

  render() {
    return (
      <>
        {this.props.beastArr.map((item, i) => {
          return (

            <HornedBeast 
              title={item.title}
              imgUrl={item.image_url}
              description={item.description}
              key={i}
            />
          )
        })}

        <h1>{this.state.dif} </h1>
        
      </>



    )

  }



}


export default Main;



