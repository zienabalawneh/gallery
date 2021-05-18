import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      numberOfPets: 0,
      
    }
  }

  increaseNumberOfPets = () => {
    this.setState({
      numberOfPets: this.state.numberOfPets + 1,
    })
  }



changeInfo = () =>{
  this.props.info();



  }
  render() {

    return (

      <Card style={{ width: '18rem' }}  >
        <Card.Img variant="top"  src={this.props.imgUrl} alt={this.props.title} onClick={this.changeInfo} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}

          </Card.Text>
          <Card.Text>Number of pets: {this.state.numberOfPets}  </Card.Text>
          <Button onClick={this.increaseNumberOfPets} variant="primary">voets</Button>
        </Card.Body>
      </Card>
    );
  }


}


export default HornedBeast;