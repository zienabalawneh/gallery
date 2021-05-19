import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';



class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfvoets: 0,
        }
    }
    increaseNumberofVote = () => {
        this.setState({
      numberOfvoets: this.state.numberOfvoets+1,
        })
    }
    getMyArr=()=>{
        this.props.getMyArr(this.props.title)
    }
    render() {
        return (
          <> 

                <Card style={{ width: '18rem' }}>
                <Card.Img onClick={this.getMyArr}   variant="top" src={this.props.imageUrl} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.descreption}</Card.Text>
                    <Card.Text>horns: {this.props.horns}</Card.Text>
                    <Card.Text>number votes: {this.state. numberOfvoets}</Card.Text>
                    <Button onClick={this.increaseNumberofVote} variant="primary"> Vote  </Button>
                </Card.Body>
                </Card>

            </>
        )
    }
}
export default HornedBeast;